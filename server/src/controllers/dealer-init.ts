import { GameService } from '@server/services/game-service';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { ApiFailMessage } from '@server/api-fail-message';
import { DealerToJoin } from '@shared/api-types/user';
import { validateDealerToJoin } from '@shared/api-validators/user';
import { GAME_ROOMS } from '@server/store/game-rooms';
import { setDealerListeners } from '@server/controllers/dealer-controller';
import {
  PointingPokerServer,
  PointingPokerServerSocket,
} from 'types/server-socket';

const validate = (dealerToJoin: DealerToJoin): string | null => {
  if (!dealerToJoin.gameTitle) return ApiFailMessage.GAME_NEED_TITLE;
  if (!validateDealerToJoin(dealerToJoin)) return ApiFailMessage.USER_NEED_NAME;
  return null;
};

export const getDealerInitHandler =
  (server: PointingPokerServer, socket: PointingPokerServerSocket) =>
  (dealerToJoin: DealerToJoin) => {
    const failMessage = validate(dealerToJoin);
    if (failMessage) {
      socket.emit(ApiServerEvents.CREATE_GAME_FAILED, failMessage);
      return;
    }

    const game = new GameService(server, socket, dealerToJoin);
    GAME_ROOMS.set(game.room, game);

    setDealerListeners(socket, game);
    socket.join(game.room);
    socket.emit(ApiServerEvents.GAME_CREATED, game.initDealer());
  };
