import { ApiClientEvents, ApiServerEvents } from '@shared/api-types/api-events';
import { ApiFailMessage } from '@server/api-fail-message';
import { GAME_ROOMS } from '@server/store/game-rooms';
import { getLoginHandler } from '@server/controllers/user-init-login-handler';
import { PointingPokerServerSocket } from 'types/server-socket';

export const getUserInitHandler =
  (socket: PointingPokerServerSocket) => (gameId: string) => {
    const game = GAME_ROOMS.get(gameId);

    if (!game) {
      socket.emit(
        ApiServerEvents.JOIN_GAME_FAILED,
        ApiFailMessage.GAME_NOT_EXIST
      );
      return;
    }

    if (game.getUser(socket.id)) {
      socket.emit(
        ApiServerEvents.JOIN_GAME_FAILED,
        ApiFailMessage.USER_WITH_SOCKET_ID_EXIST
      );
      return;
    }

    socket.emit(ApiServerEvents.READY_TO_ADD_USER);
    socket.on(ApiClientEvents.ADD_USER, getLoginHandler(socket, game));
  };
