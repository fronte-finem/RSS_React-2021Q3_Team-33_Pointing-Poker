import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@server/api-fail-message';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { GAME_ROOMS } from '@server/store/game-rooms';
import { PointingPokerServerSocket } from 'types/server-socket';
import { AckCallback, setFail, setOk } from '@shared/api-types/api-events-maps';
import { GameSettings } from '@shared/api-types/game-settings';

const TITLE_MAX_LENGTH = 250;

const validate = (title: string) => {
  if (!title) return ApiFailMessage.GAME_NEED_TITLE;
  if (title.length > TITLE_MAX_LENGTH)
    return `${ApiFailMessage.GAME_TITLE_TO_LONG}${TITLE_MAX_LENGTH}`;
  return null;
};

export const getChangeGameTitleHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (title: string, ackCallback: AckCallback<string>) => {
    const failMessage = validate(title);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }
    game.changeTitle(title);
    ackCallback(setOk(title));
    game.server.to(game.room).emit(ApiServerEvents.GAME_TITLE_CHANGED, title);
  };

export const getCancelGameHandler =
  (socket: PointingPokerServerSocket, game: GameService) => () => {
    game.server.to(game.room).emit(ApiServerEvents.GAME_CANCELED);
    game.server.to(game.room).disconnectSockets(true);
    game.destroy();
    GAME_ROOMS.delete(game.room);
  };

export const getStartGameHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (gameSettings: GameSettings, ackCallback: AckCallback<GameSettings>) => {
    if (game.isStarted) {
      ackCallback(setFail(ApiFailMessage.GAME_STARTED));
      return;
    }
    ackCallback(setOk(gameSettings));
    game.server.to(game.room).emit(ApiServerEvents.GAME_STARTED, gameSettings);
  };

export const getEndGameHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (ackCallback: AckCallback<true>) => {
    if (!game.isStarted) {
      ackCallback(setFail(ApiFailMessage.GAME_NOT_STARTED));
      return;
    }
    ackCallback(setOk(true));
    game.server
      .to(game.room)
      .emit(ApiServerEvents.GAME_ENDED, game.issueService.getResults());
  };
