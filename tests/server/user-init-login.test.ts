import { createServer, Server } from 'http';
import { connectClient, emit, onEvent } from '@server/test-helpers';
import { initSocketServer } from '@server/init-socket-server';
import { ApiClientEvents, ApiServerEvents } from '@shared/api-types/api-events';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { InitDealer } from '@shared/api-types/init';
import { DealerToJoin, Role, UserToJoin } from '@shared/api-types/user';
import { PointingPokerServer } from 'types/server-socket';
import {
  AckResponse,
  AckResponseStatus,
} from '@shared/api-types/api-events-maps';
import { PointingPokerClientSocket } from 'types/client-socket';
import { zip } from '@shared/utils/array';

const PORT = 42004;
let httpServer: Server | undefined;
let ioServer: PointingPokerServer | undefined;

beforeEach(() => {
  httpServer = createServer();
  ioServer = initSocketServer(httpServer, false);
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
const gamerData: UserToJoin = Object.freeze({
  firstName: 'Gandalf the Grey',
  role: Role.GAMER,
});

describe('Users init tests.', () => {
  type MaybeSocket = PointingPokerClientSocket | undefined;
  type Sockets = PointingPokerClientSocket[];
  let userSocket1: MaybeSocket;
  let userSocket2: MaybeSocket;
  let dealerSocket: MaybeSocket;
  let gameId: string | undefined;
  const getUserSockets = () => [userSocket1, userSocket2] as Sockets;
  const getSockets = () => [userSocket1, userSocket2, dealerSocket] as Sockets;

  function usersEmit<Payload>(
    event: ApiClientEvents,
    payloads: Payload[]
  ): Promise<AckResponse<any>[]> {
    return Promise.all(
      zip(payloads, getUserSockets()).map(([payload, socket]) =>
        emit(event, payload, socket)
      )
    );
  }

  beforeEach(async () => {
    [userSocket1, userSocket2, dealerSocket] = await Promise.all(
      Array(3).fill(PORT).map(connectClient)
    );
    const { data }: AckResponse<InitDealer> = await emit(
      ApiClientEvents.CREATE_GAME,
      dealerData,
      dealerSocket
    );
    gameId = data?.gameId;
    expect(gameId).not.toBeUndefined();

    const payloads = Array(2).fill(gameId);
    const responses = await usersEmit(ApiClientEvents.JOIN_GAME, payloads);
    expect(responses[0].status).toBe(AckResponseStatus.OK);
    expect(responses[1].status).toBe(AckResponseStatus.OK);
  });

  afterEach(() => {
    getSockets().map((socket) => socket.close());
  });

  it('server should validate users login', async () => {
    const badGamerData = { ...gamerData, firstName: '' };
    const payloads2 = [badGamerData, gamerData];
    let loginResponses = await usersEmit(ApiClientEvents.ADD_USER, payloads2);
    expect(loginResponses[0].status).toBe(AckResponseStatus.FAIL);
    expect(loginResponses[0].failMessage).toBe(ApiFailMessage.USER_NEED_NAME);
    expect(loginResponses[0].data).toBeUndefined();
    expect(loginResponses[1].status).toBe(AckResponseStatus.OK);
    expect(loginResponses[1].failMessage).toBeUndefined();
    expect(loginResponses[1].data?.gameId).toBe(gameId);

    const goodGamerData = { ...gamerData, firstName: 'Frodo' };
    const payloads3 = [goodGamerData, gamerData];
    loginResponses = await usersEmit(ApiClientEvents.ADD_USER, payloads3);
    expect(loginResponses[0].status).toBe(AckResponseStatus.OK);
    expect(loginResponses[0].failMessage).toBeUndefined();
    expect(loginResponses[0].data?.gameId).toBe(gameId);
    expect(loginResponses[1].status).toBe(AckResponseStatus.FAIL);
    expect(loginResponses[1].failMessage).toBe(
      ApiFailMessage.SAME_USER_ALREADY_EXIST
    );
    expect(loginResponses[1].data).toBeUndefined();
  });

  it('server should notify about disconnected users', async () => {
    const goodGamerData = { ...gamerData, firstName: 'Frodo' };
    const payloads2 = [goodGamerData, gamerData];
    const loginResponses = await usersEmit(ApiClientEvents.ADD_USER, payloads2);
    expect(loginResponses[0].status).toBe(AckResponseStatus.OK);
    expect(loginResponses[1].status).toBe(AckResponseStatus.OK);

    const events = [userSocket2!, dealerSocket!].map((socket) =>
      onEvent(ApiServerEvents.USER_DISCONNECTED, socket)
    );
    const user1Id = userSocket1!.id;
    userSocket1?.disconnect();
    const responses: string[] = await Promise.all(events);
    expect(responses[0]).toBe(user1Id);
    expect(responses[1]).toBe(user1Id);
  });
});
