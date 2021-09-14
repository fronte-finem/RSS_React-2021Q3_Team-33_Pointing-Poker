import { GameService } from '@server/services/game-service';
import { UserToJoin } from '@shared/api-types/user';
import { ApiClientEvents, ApiServerEvents } from '@shared/api-types/api-events';
import { getDisconnectHandler } from '@server/controllers/user-handlers';
import { PointingPokerServerSocket } from 'types/server-socket';
import { AckCallback, setOk } from '@shared/api-types/api-events-maps';
import { InitUser } from '@shared/api-types/init';
import { getPostMessageHandler } from '@server/controllers/chat-handlers';
import {
  getKickHandler,
  getKickVoteHandler,
} from '@server/controllers/kick-handlers';
import { getScoreAddHandler } from '@server/controllers/issue-handlers';

export const setUserListeners = (
  socket: PointingPokerServerSocket,
  game: GameService,
  userToJoin: UserToJoin,
  ackCallback: AckCallback<InitUser>
): void => {
  const user = game.userService.addUser(userToJoin, userToJoin.role, socket);
  ackCallback(setOk(game.initUser()));
  socket.join(game.room);
  socket.to(game.room).emit(ApiServerEvents.USER_JOINED, user);

  socket.on(ApiClientEvents.DISCONNECT, getDisconnectHandler(socket, game));
  socket.on(ApiClientEvents.POST_MESSAGE, getPostMessageHandler(socket, game));
  socket.on(ApiClientEvents.KICK_USER, getKickHandler(socket, game));
  socket.on(
    ApiClientEvents.VOTE_TO_KICK_USER,
    getKickVoteHandler(socket, game)
  );
  socket.on(ApiClientEvents.ADD_SCORE, getScoreAddHandler(socket, game));
};
