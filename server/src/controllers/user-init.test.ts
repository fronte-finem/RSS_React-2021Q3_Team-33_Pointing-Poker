import { createServer, Server } from 'http';
import { connectClient, emit } from '@server/test-helpers';
import { initSocketServer } from '@server/init-socket-server';
import { ApiClientEvents } from '@shared/api-types/api-events';
import { ApiFailMessage } from '@server/api-fail-message';
import { InitDealer } from '@shared/api-types/init';
import { DealerToJoin } from '@shared/api-types/user';
import { PointingPokerServer } from 'types/server-socket';
import { ApiResponse, ResponseStatus } from '@shared/api-types/api-events-maps';

const PORT = 42003;
let httpServer: Server | undefined;
let ioServer: PointingPokerServer | undefined;

beforeEach(() => {
  httpServer = createServer();
  ioServer = initSocketServer(httpServer);
  httpServer.listen(PORT);
});

afterEach(() => {
  ioServer?.close();
  httpServer?.close();
});

const dealerData: DealerToJoin = Object.freeze({
  firstName: 'Tom Bombadil',
  gameTitle: 'The Lord of the Rings',
});

describe('Users init tests.', () => {
  it('server should validate join to game by game-id', async () => {
    const [userSocket1, userSocket2, dealerSocket] = await Promise.all(
      Array(3).fill(PORT).map(connectClient)
    );
    const { data }: ApiResponse<InitDealer> = await emit(
      ApiClientEvents.CREATE_GAME,
      dealerData,
      dealerSocket
    );
    expect(data?.gameId).not.toBeUndefined();

    const gameId = data?.gameId!;
    const badId = gameId.split('').reverse().join('');

    const joinEvent1 = emit(ApiClientEvents.JOIN_GAME, badId, userSocket1);
    const joinEvent2 = emit(ApiClientEvents.JOIN_GAME, gameId, userSocket2);
    const responses = await Promise.all([joinEvent1, joinEvent2]);

    expect(responses[0].status).toBe(ResponseStatus.FAIL);
    expect(responses[0].failMessage).toBe(ApiFailMessage.GAME_NOT_EXIST);
    expect(responses[0].data).toBeUndefined();

    expect(responses[1].status).toBe(ResponseStatus.OK);
    expect(responses[1].failMessage).toBeUndefined();
    expect(responses[1].data).toBe(gameId);

    [userSocket1, userSocket2, dealerSocket].map((socket) => socket?.close());
  });
});
