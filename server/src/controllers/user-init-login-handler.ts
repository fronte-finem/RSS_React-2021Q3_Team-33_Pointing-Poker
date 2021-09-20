import { GameService } from '@server/services/game-service';
import { UserToJoin } from '@shared/api-types/user';
import { validateUserToJoin } from '@shared/api-validators/user';
import { ApiFailMessage } from '@server/api-fail-message';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { setUserListeners } from '@server/controllers/user-controller';
import { PointingPokerServerSocket } from 'types/server-socket';
import { InitUser } from '@shared/api-types/init';
import { AckCallback, setFail } from '@shared/api-types/api-events-maps';

const validate = (userToJoin: UserToJoin, game: GameService): string | null => {
  if (!validateUserToJoin(userToJoin)) return ApiFailMessage.USER_NEED_NAME;
  if (game.userService.isUserInStore(userToJoin))
    return ApiFailMessage.SAME_USER_ALREADY_EXIST;
  return null;
};

export const getLoginHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (userToJoin: UserToJoin, ackCallback: AckCallback<InitUser>) => {
    const failMessage = validate(userToJoin, game);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }

    if (!game.needDealerAdmitToJoin) {
      setUserListeners(socket, game, userToJoin, ackCallback);
      return;
    }

    game.dealerSocket.emit(
      ApiServerEvents.ALLOW_USER_JOIN,
      userToJoin,
      (allowed) => {
        if (!allowed) {
          ackCallback(setFail(ApiFailMessage.DEALER_REJECTED_LOGIN));
          return;
        }
        setUserListeners(socket, game, userToJoin, ackCallback);
      }
    );
  };
