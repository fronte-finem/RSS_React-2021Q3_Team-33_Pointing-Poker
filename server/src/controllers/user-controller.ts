import { GameService } from '@server/services/game-service';
import { UserToJoin } from '@shared/api-types/user';
import { ApiClientEvents, ApiServerEvents } from '@shared/api-types/api-events';
import {
  getDisconnectHandler,
  getPostMessageHandler,
} from '@server/controllers/user-handlers';
import { PointingPokerServerSocket } from 'types/server-socket';

export const setUserListeners = (
  socket: PointingPokerServerSocket,
  game: GameService,
  userToJoin: UserToJoin
): void => {
  const user = game.addUser(userToJoin, socket.id, userToJoin.role);
  socket.join(game.room);
  socket.emit(ApiServerEvents.LOGGED_IN, game.initUser());
  socket.to(game.room).emit(ApiServerEvents.USER_JOINED, user);

  socket.on(ApiClientEvents.DISCONNECT, getDisconnectHandler(socket, game));
  socket.on(ApiClientEvents.POST_MESSAGE, getPostMessageHandler(socket, game));
};
