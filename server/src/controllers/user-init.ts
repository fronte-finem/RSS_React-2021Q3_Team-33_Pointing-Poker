import { ApiClientEvents } from '@shared/api-types/api-events';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { GAME_ROOMS } from '@server/store/game-rooms';
import { getLoginHandler } from '@server/controllers/user-init-login-handler';
import { PointingPokerServerSocket } from 'types/server-socket';
import { AckCallback, setFail, setOk } from '@shared/api-types/api-events-maps';

export const getUserInitHandler =
  (socket: PointingPokerServerSocket) =>
  (gameId: string, ackCallback: AckCallback<string>) => {
    const game = GAME_ROOMS.get(gameId);

    if (!game) {
      ackCallback(setFail(ApiFailMessage.GAME_NOT_EXIST));
      return;
    }

    if (game.userService.getUser(socket.id)) {
      ackCallback(setFail(ApiFailMessage.USER_WITH_SOCKET_ID_EXIST));
      return;
    }

    ackCallback(setOk(gameId));
    socket.on(ApiClientEvents.ADD_USER, getLoginHandler(socket, game));
  };
