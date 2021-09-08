import { GameService } from '@server/services/game-service';
import { UserToJoin } from '@shared/api-types/user';
import { validateUserToJoin } from '@shared/api-validators/user';
import { ApiFailMessage } from '@server/api-fail-message';
import { ApiClientEvents, ApiServerEvents } from '@shared/api-types/api-events';
import { setUserListeners } from '@server/controllers/user-controller';
import { PointingPokerServerSocket } from '@server/types';

export const getLoginHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (userToJoin: UserToJoin) => {
    let failMessage = '';
    if (!validateUserToJoin(userToJoin))
      failMessage = ApiFailMessage.USER_NEED_NAME;
    if (game.isUserInStore(userToJoin))
      failMessage = ApiFailMessage.SAME_USER_ALREADY_EXIST;

    if (failMessage) {
      socket.emit(ApiServerEvents.LOGIN_FAILED, failMessage);
      return;
    }

    if (!game.needDealerAdmitToJoin) {
      setUserListeners(socket, game, userToJoin);
      return;
    }

    game.dealerSocket.emit(ApiServerEvents.ALLOW_USER_JOIN, userToJoin);

    game.dealerSocket.once(ApiClientEvents.IS_USER_JOIN_ALLOWED, (allowed) => {
      if (!allowed) {
        socket.emit(
          ApiServerEvents.LOGIN_FAILED,
          ApiFailMessage.DEALER_REJECTED_LOGIN
        );
        return;
      }
      setUserListeners(socket, game, userToJoin);
    });
  };
