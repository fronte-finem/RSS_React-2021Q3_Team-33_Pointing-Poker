import { initSocketServer } from '@server/init-socket-server';
import { createServer } from 'http';

const PORT = process.env.PORT || 42424;

const httpServer = createServer();
initSocketServer(httpServer);
httpServer.listen(PORT);

console.log(`Server started at: ws://localhost:${PORT}`);
