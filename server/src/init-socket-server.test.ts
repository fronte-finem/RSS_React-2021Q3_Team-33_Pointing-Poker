import { initSocketServer } from '@server/init-socket-server';
import { createServer, Server } from 'http';
import { io as ioClient } from 'socket.io-client';
import { ApiClientEvents, ApiServerEvents } from '@shared/api-types/api-events';
import { ApiFailMessage } from '@server/api-fail-message';
import { InitDealer } from '@shared/api-types/init';
import { DealerToJoin, Role, UserToJoin } from '@shared/api-types/user';
import { PointingPokerClientSocket } from 'types/client-socket';
import { PointingPokerServer } from 'types/server-socket';

const PORT = 43434;
let httpServer: Server | undefined;
let ioServer: PointingPokerServer | undefined;

const connectClient = (): Promise<PointingPokerClientSocket> => {
  const clientSocket = ioClient(`http://localhost:${PORT}`, {
    transports: ['websocket'],
    forceNew: true,
  });
  // clientSocket.on('connect', () =>
  //   console.log(`client connected, id: ${clientSocket.id}`)
  // );
  return new Promise<PointingPokerClientSocket>((resolve) =>
    clientSocket.on('connect', () => resolve(clientSocket))
  );
};

const onEvent = (
  event: ApiServerEvents,
  clientSocket: PointingPokerClientSocket
): Promise<any> => {
  return new Promise((resolve) => clientSocket.on(event, resolve));
};

const onAnyEvent = (clientSocket: PointingPokerClientSocket): Promise<any> => {
  return new Promise((resolve) =>
    clientSocket.onAny((...args) => {
      // console.log(args);
      resolve(args);
    })
  );
};

beforeEach(() => {
  httpServer = createServer();
  ioServer = initSocketServer(httpServer);
  httpServer.listen(PORT);
});

afterEach(() => {
  ioServer?.close();
  httpServer?.close();
});

describe('Pointing Poker socket.io API', () => {
  const dealerData: DealerToJoin = {
    firstName: 'Tom Bombadil',
    gameTitle: 'The Lord of the Rings',
  };
  const gamerData: UserToJoin = {
    firstName: 'Gandalf the Grey',
    role: Role.GAMER,
  };

  it('server should ask game title', async () => {
    const clientSocket = await connectClient();
    clientSocket.emit(ApiClientEvents.CREATE_GAME, {
      ...dealerData,
      gameTitle: '',
    });
    const response = await onEvent(
      ApiServerEvents.CREATE_GAME_FAILED,
      clientSocket
    );
    expect(response).toBe(ApiFailMessage.GAME_NEED_TITLE);
    clientSocket.close();
  });

  it('server should ask dealer name', async () => {
    const clientSocket = await connectClient();
    clientSocket.emit(ApiClientEvents.CREATE_GAME, {
      ...dealerData,
      firstName: '',
    });
    const response = await onEvent(
      ApiServerEvents.CREATE_GAME_FAILED,
      clientSocket
    );
    expect(response).toBe(ApiFailMessage.USER_NEED_NAME);
    clientSocket.close();
  });

  it('server should return init-dealer object', async () => {
    const clientSocket = await connectClient();
    clientSocket.emit(ApiClientEvents.CREATE_GAME, dealerData);
    const response: InitDealer = await onEvent(
      ApiServerEvents.GAME_CREATED,
      clientSocket
    );
    expect(typeof response).toBe('object');
    expect(response.gameTitle).toBe(dealerData.gameTitle);
    expect(response.users[0].firstName).toBe(dealerData.firstName);
    clientSocket.close();
  });

  it('server should reject join to game with wrong game-id', async () => {
    const clientSocket = await connectClient();
    clientSocket.emit(ApiClientEvents.JOIN_GAME, 'xxx');
    const response = await onEvent(
      ApiServerEvents.JOIN_GAME_FAILED,
      clientSocket
    );
    expect(response).toBe(ApiFailMessage.GAME_NOT_EXIST);
    clientSocket.close();
  });

  it('server should allow login if game-id correct', async () => {
    const [user, dealer] = await Promise.all([
      connectClient(),
      connectClient(),
    ]);
    expect(user.connected).toBeTruthy();
    expect(dealer.connected).toBeTruthy();
    // console.log(` dealer: ${dealer.id}\n user: ${user.id}`);
    const created = onEvent(ApiServerEvents.GAME_CREATED, dealer);
    dealer.emit(ApiClientEvents.CREATE_GAME, dealerData);
    const { gameId } = await created;
    // console.log(`game id: ${gameId}`);
    user.emit(ApiClientEvents.JOIN_GAME, gameId);
    const [event] = await onAnyEvent(user);
    expect(event).toBe(ApiServerEvents.READY_TO_ADD_USER);
    user.close();
    dealer.close();
  });

  it('server should login users', async () => {
    const [user1, user2, dealer] = await Promise.all(
      [0, 0, 0].map(connectClient)
    );

    dealer.emit(ApiClientEvents.CREATE_GAME, dealerData);
    const { gameId } = await onEvent(ApiServerEvents.GAME_CREATED, dealer);
    expect(typeof gameId).toBe('string');

    user1.emit(ApiClientEvents.JOIN_GAME, gameId);
    user2.emit(ApiClientEvents.JOIN_GAME, gameId);
    let [[ev1], [ev2]] = await Promise.all([user1, user2].map(onAnyEvent));
    expect(ev1).toBe(ApiServerEvents.READY_TO_ADD_USER);
    expect(ev2).toBe(ApiServerEvents.READY_TO_ADD_USER);

    user1.emit(ApiClientEvents.ADD_USER, { ...gamerData, firstName: '' });
    user2.emit(ApiClientEvents.ADD_USER, { ...gamerData });
    [[ev1], [ev2]] = await Promise.all([user1, user2].map(onAnyEvent));
    expect(ev1).toBe(ApiServerEvents.LOGIN_FAILED);
    expect(ev2).toBe(ApiServerEvents.LOGGED_IN);

    [user1, user2, dealer].map((socket) => socket.close());
  });
});
