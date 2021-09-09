import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@server/api-fail-message';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { PointingPokerServerSocket } from 'types/server-socket';

export const getDisconnectHandler =
  (socket: PointingPokerServerSocket, game: GameService) => () => {
    game.server
      .to(game.room)
      .emit(ApiServerEvents.USER_DISCONNECTED, socket.id);
    game.deleteUser(socket.id);
  };

export const getPostMessageHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (message: string) => {
    let failMessage = message ? null : ApiFailMessage.MESSAGE_EMPTY;
    if (message.length > 150) failMessage = ApiFailMessage.MESSAGE_TO_LONG;
    if (failMessage) {
      socket.emit(ApiServerEvents.POST_MESSAGE_FAILED, failMessage);
      return;
    }
    const chatMessage = game.addMessage(socket.id, message);
    game.server.to(game.room).emit(ApiServerEvents.MESSAGE_POSTED, chatMessage);
  };
