import { createServer } from 'http';
import { Server } from 'socket.io';
import { ApiClientEvents } from '@shared/api-types/api-events';
import { getDealerInitHandler } from '@server/controllers/dealer-init';
import { PointingPokerServer, PointingPokerServerSocket } from '@server/types';
import { getUserInitHandler } from '@server/controllers/user-init';

const httpServer = createServer();
const io: PointingPokerServer = new Server(httpServer, {
  path: '/api/',
});

io.on('connection', (socket: PointingPokerServerSocket) => {
  socket.on(ApiClientEvents.CREATE_GAME, getDealerInitHandler(io, socket));

  socket.on(ApiClientEvents.JOIN_GAME, getUserInitHandler(socket));
});

httpServer.listen(3000);
