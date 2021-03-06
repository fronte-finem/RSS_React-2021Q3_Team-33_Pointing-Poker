import { PointingPokerServerSocket } from 'types/server-socket';
import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { AckCallback, setFail, setOk } from '@shared/api-types/api-events-maps';

const validate = (
  userId: string,
  game: GameService,
  socket: PointingPokerServerSocket
) => {
  if (userId === socket.id) return ApiFailMessage.NO_SELF_KICK;
  if (userId === game.dealerSocket.id) return ApiFailMessage.NO_DEALER_KICK;
  if (!game.userService.getUser(userId)) return ApiFailMessage.NO_USER_FOR_KICK;
  return null;
};

const dealerKick = (userId: string, game: GameService) => {
  const badUserSocket = game.userService.getUserSocket(userId);
  const kickResult = game.userService.kick(userId, true);
  game.server.to(game.room).emit(ApiServerEvents.USER_KICK_RESULT, kickResult);
  badUserSocket?.emit(ApiServerEvents.KICKED, kickResult.reason);
  badUserSocket?.disconnect();
  game.userService.deleteUser(userId);
};

export const getKickHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (userId: string, ackCallback: AckCallback<string>) => {
    const failMessage = validate(userId, game, socket);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }

    if (socket.id === game.dealerSocket.id) {
      ackCallback(setOk(userId));
      dealerKick(userId, game);
      return;
    }

    if (game.userService.kickVoteStarted) {
      ackCallback(setFail(ApiFailMessage.KICK_VOTE_ALREADY_STARTED));
      return;
    }
    if (!game.userService.canStartKickVote()) {
      ackCallback(setFail(ApiFailMessage.NOT_ENOUGH_USERS_FOR_KICK_VOTE));
      return;
    }

    const badSocket = game.server.sockets.sockets.get(userId);

    if (!badSocket) {
      ackCallback(setFail(ApiFailMessage.SOCKET_OF_USER_FOR_KICK_NOT_FOUND));
      return;
    }

    ackCallback(setOk(userId));
    const initKickVote = game.userService.startKickVote(userId, socket.id);

    badSocket
      .to(game.room)
      .emit(ApiServerEvents.KICK_VOTE_STARTED, initKickVote);
  };

export const getKickVoteHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (vote: boolean, ackCallback: AckCallback<boolean>) => {
    if (!game.userService.kickVoteStarted) {
      ackCallback(setFail(ApiFailMessage.NO_ACTIVE_KICK_VOTE));
      return;
    }

    const result = game.userService.addKickVote(socket.id, vote);
    ackCallback(setOk(vote));
    if (!result) return;

    game.server.to(game.room).emit(ApiServerEvents.USER_KICK_RESULT, result);
    if (result.kicked) {
      const badUserSocket = game.userService.getUserSocket(result.badUserId);
      badUserSocket?.emit(ApiServerEvents.KICKED, result.reason);
      badUserSocket?.disconnect();
      game.userService.deleteUser(result.badUserId);
    }
  };
