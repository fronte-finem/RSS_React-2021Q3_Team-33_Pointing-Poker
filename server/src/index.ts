import path from 'path';
import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import { initSocketServer } from '@server/init-socket-server';

const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = createServer(app);
initSocketServer(httpServer);

const buildPath = path.join(__dirname, '../../dist');

app.use(cors());
app.use(express.static(buildPath));

app.get('/api/test', (request, response) => {
  response.json({ message: 'Hello world!!!' });
});
// app.get('(/*)?', async (request, response) => {
//   response.sendFile(path.join(buildPath, 'index.html'));
// });

httpServer.listen(PORT);
console.log(`Server started at: ${JSON.stringify(httpServer.address())}`);
