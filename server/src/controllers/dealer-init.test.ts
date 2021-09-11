import { createServer, Server } from 'http';
import { connectClient, emit } from '@server/test-helpers';
import { initSocketServer } from '@server/init-socket-server';
import { ApiClientEvents } from '@shared/api-types/api-events';
import { ApiFailMessage } from '@server/api-fail-message';
import { InitDealer } from '@shared/api-types/init';
import { DealerToJoin } from '@shared/api-types/user';
import { PointingPokerServer } from 'types/server-socket';
import {
  AckResponse,
  AckResponseStatus,
} from '@shared/api-types/api-events-maps';
import { zip } from '@shared/utils/array';

const PORT = 42002;
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

describe('Dealer init tests.', () => {
  it('server should validate game creation', async () => {
    const dealerSockets = await Promise.all(
      Array(3).fill(PORT).map(connectClient)
    );
    const badDealerData1 = { ...dealerData, gameTitle: '' };
    const badDealerData2 = { ...dealerData, firstName: '' };

    const responses: AckResponse<InitDealer>[] = await Promise.all(
      zip([badDealerData1, badDealerData2, dealerData], dealerSockets).map(
        ([data, socket]) => emit(ApiClientEvents.CREATE_GAME, data, socket)
      )
    );

    expect(responses[0].status).toBe(AckResponseStatus.FAIL);
    expect(responses[1].status).toBe(AckResponseStatus.FAIL);
    expect(responses[2].status).toBe(AckResponseStatus.OK);

    expect(responses[0].failMessage).toBe(ApiFailMessage.GAME_NEED_TITLE);
    expect(responses[1].failMessage).toBe(ApiFailMessage.USER_NEED_NAME);
    expect(responses[2].failMessage).toBeUndefined();

    expect(responses[0].data).toBeUndefined();
    expect(responses[1].data).toBeUndefined();
    expect(typeof responses[2].data).toBe('object');
    expect(typeof responses[2].data?.gameId).toBe('string');
    expect(responses[2].data?.gameTitle).toBe(dealerData.gameTitle);
    expect(responses[2].data?.users[0].firstName).toBe(dealerData.firstName);

    dealerSockets.map((socket) => socket.close());
  });
});
