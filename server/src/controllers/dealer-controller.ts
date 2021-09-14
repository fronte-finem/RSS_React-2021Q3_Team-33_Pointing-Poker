import { GameService } from '@server/services/game-service';
import { ApiClientEvents } from '@shared/api-types/api-events';
import {
  getChangeGameTitleHandler,
  getCancelGameHandler,
  getStartGameHandler,
  getEndGameHandler,
} from '@server/controllers/dealer-handlers';
import { PointingPokerServerSocket } from 'types/server-socket';
import { getPostMessageHandler } from '@server/controllers/chat-handlers';
import { getKickHandler } from '@server/controllers/kick-handlers';
import {
  getAddIssueHandler,
  getDeleteIssueHandler,
  getModifyIssueHandler,
} from '@server/controllers/issue-handlers';

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
  socket.on(ApiClientEvents.KICK_USER, getKickHandler(socket, game));
  socket.on(ApiClientEvents.ADD_ISSUE, getAddIssueHandler(socket, game));
  socket.on(ApiClientEvents.DELETE_ISSUE, getDeleteIssueHandler(socket, game));
  socket.on(ApiClientEvents.EDIT_ISSUE, getModifyIssueHandler(socket, game));
  socket.on(ApiClientEvents.START_GAME, getStartGameHandler(socket, game));
  socket.on(ApiClientEvents.END_GAME, getEndGameHandler(socket, game));
}
