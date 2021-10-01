import { Server } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { ApiClientEvents } from '@shared/api-types/api-events';
import { getDealerInitHandler } from '@server/controllers/dealer-init';
import { getUserInitHandler } from '@server/controllers/user-init';
import { PointingPokerServer } from 'types/server-socket';

export const logEvent = (socket: Socket) => (event: string) =>
  console.log(`socket: [${socket.id}] >> event: "${event}"`);

export const initSocketServer = (httpServer: Server): PointingPokerServer => {
  const ioServer: PointingPokerServer = new SocketIOServer(httpServer, {});

  ioServer.on('connection', (socket) => {
    console.log(`socket connected: ${socket.id}`);

    socket.on(
      ApiClientEvents.CREATE_GAME,
      getDealerInitHandler(ioServer, socket)
    );

    socket.on(ApiClientEvents.JOIN_GAME, getUserInitHandler(socket));

    socket.onAny(logEvent(socket));
  });

  return ioServer;
};
