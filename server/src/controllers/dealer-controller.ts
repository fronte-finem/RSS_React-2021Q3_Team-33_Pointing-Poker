import { GameService } from '@server/services/game-service';
import { ApiClientEvents } from '@shared/api-types/api-events';
import {
  getChangeGameTitleHandler,
  getCancelGameHandler,
} from '@server/controllers/dealer-handlers';
import { getPostMessageHandler } from '@server/controllers/user-handlers';
import { PointingPokerServerSocket } from 'types/server-socket';

export function setDealerListeners(
  socket: PointingPokerServerSocket,
  game: GameService
): void {
  socket.on(
    ApiClientEvents.CHANGE_GAME_TITLE,
    getChangeGameTitleHandler(socket, game)
  );
  socket.on(ApiClientEvents.DISCONNECT, getCancelGameHandler(socket, game));
  socket.on(ApiClientEvents.CANCEL_GAME, getCancelGameHandler(socket, game));
  socket.on(ApiClientEvents.POST_MESSAGE, getPostMessageHandler(socket, game));
}
