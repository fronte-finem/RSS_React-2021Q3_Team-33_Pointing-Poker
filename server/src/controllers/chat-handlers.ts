import { PointingPokerServerSocket } from 'types/server-socket';
import { GameService } from '@server/services/game-service';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { AckCallback, setFail, setOk } from '@shared/api-types/api-events-maps';
import { CHAT_MESSAGE_MAX_LENGTH } from '@shared/api-validation/api-constants';

const validate = (message: string) => {
  if (!message) return ApiFailMessage.MESSAGE_EMPTY;
  if (message.length > CHAT_MESSAGE_MAX_LENGTH)
    return `${ApiFailMessage.MESSAGE_TO_LONG}${CHAT_MESSAGE_MAX_LENGTH}`;
  return null;
};

export const getPostMessageHandler =
  (socket: PointingPokerServerSocket, game: GameService) =>
  (message: string, ackCallback: AckCallback<string>) => {
    const failMessage = validate(message);
    if (failMessage) {
      ackCallback(setFail(failMessage));
      return;
    }
    const chatMessage = game.chatService.addMessage(socket.id, message);
    ackCallback(setOk(message));
    game.server.to(game.room).emit(ApiServerEvents.MESSAGE_POSTED, chatMessage);
  };
