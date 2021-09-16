import { PointingPokerServerSocket } from 'types/server-socket';
import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@server/api-fail-message';
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
  const badUserSocket = game.userService.getUserSocket(userId)!;
  const kickResult = game.userService.kick(userId, true);
  badUserSocket.emit(ApiServerEvents.KICKED, kickResult.reason);
  badUserSocket.disconnect();
  game.server.to(game.room).emit(ApiServerEvents.USER_KICK_RESULT, kickResult);
};

export const getKickHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (userId: string, ackCallback: AckCallback<string>) => {
    const failMessage = validate(userId, game, socket);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }
    ackCallback(setOk(userId));

    if (socket.id === game.dealerSocket.id) {
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

    const initKickVote = game.userService.startKickVote(userId, socket.id);

    game.dealerSocket
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
  };
