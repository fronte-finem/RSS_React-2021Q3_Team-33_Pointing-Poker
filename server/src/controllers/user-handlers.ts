import { GameService } from '@server/services/game-service';
import { ApiServerEvents } from '@shared/api-types/api-events';
import { PointingPokerServerSocket } from 'types/server-socket';

export const getDisconnectHandler =
  (socket: PointingPokerServerSocket, game: GameService) => () => {
    game.server
      .to(game.room)
      .emit(ApiServerEvents.USER_DISCONNECTED, socket.id);
    game.deleteUser(socket.id);
  };
