import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@server/api-fail-message';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { GAME_ROOMS } from '@server/store/game-rooms';
import { PointingPokerServerSocket } from '@server/types';

export const getChangeGameTitleHandler =
  (socket: PointingPokerServerSocket, game: GameService) => (title: string) => {
    const failMessage = title ? null : ApiFailMessage.GAME_NEED_TITLE;
    if (failMessage) {
      socket.emit(ApiServerEvents.CHANGE_GAME_TITLE_FAILED, failMessage);
      return;
    }
    game.changeTitle(title);
    socket.emit(ApiServerEvents.GAME_TITLE_CHANGED, title);
  };

export const getCancelGameHandler =
  (socket: PointingPokerServerSocket, game: GameService) => () => {
    game.server.to(game.room).emit(ApiServerEvents.GAME_CANCELED);
    game.server.to(game.room).disconnectSockets(true);
    game.destroy();
    GAME_ROOMS.delete(game.room);
  };
