import { createServer, Server } from 'http';
import { connectClient, onEvent } from '@server/test-helpers';
import { initSocketServer } from '@server/init-socket-server';
import { PointingPokerServer } from 'types/server-socket';
import { ApiServerEvents } from '@shared/api-types/api-events';

const PORT = 42001;
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

describe('Connections tests', () => {
  it('server should connect/disconnect clients', async () => {
    const SOCKETS_NUM = 10;
    const sockets = await Promise.all(
      Array(SOCKETS_NUM).fill(PORT).map(connectClient)
    );
    const getConnected = () => sockets.filter((socket) => socket.connected);

    expect(getConnected()).toHaveLength(SOCKETS_NUM);

    ioServer?.disconnectSockets(true);
    await Promise.all(
      getConnected().map((socket) =>
        onEvent(ApiServerEvents.DISCONNECT, socket)
      )
    );

    expect(getConnected()).toHaveLength(0);
  });
});
