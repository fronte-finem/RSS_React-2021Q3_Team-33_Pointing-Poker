import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { DealerToJoin } from '@shared/api-types/user';
import { validateDealerToJoin } from '@shared/api-validation/user';
import { GAME_ROOMS } from '@server/store/game-rooms';
import { setDealerListeners } from '@server/controllers/dealer-controller';
import {
  PointingPokerServer,
  PointingPokerServerSocket,
} from 'types/server-socket';
import { InitDealer } from '@shared/api-types/init';
import { AckCallback, setFail, setOk } from '@shared/api-types/api-events-maps';

const validate = (dealerToJoin: DealerToJoin): string | null => {
  if (!dealerToJoin.gameTitle) return ApiFailMessage.GAME_NEED_TITLE;
  if (!validateDealerToJoin(dealerToJoin)) return ApiFailMessage.USER_NEED_NAME;
  return null;
};

export const getDealerInitHandler =
  (server: PointingPokerServer, socket: PointingPokerServerSocket) =>
  (dealerToJoin: DealerToJoin, ackCallback: AckCallback<InitDealer>) => {
    const failMessage = validate(dealerToJoin);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }

    const game = new GameService(server, socket, dealerToJoin);
    GAME_ROOMS.set(game.room, game);

    setDealerListeners(socket, game);
    socket.join(game.room);
    ackCallback(setOk(game.initDealer()));
  };
