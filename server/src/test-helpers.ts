import { ApiClientEvents, ApiServerEvents } from '@shared/api-types/api-events';
import { PointingPokerClientSocket } from 'types/client-socket';
import { io as ioClient } from 'socket.io-client';

export const connectClient = (
  port: number
): Promise<PointingPokerClientSocket> => {
  const clientSocket = ioClient(`http://localhost:${port}`, {
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

export function emit(
  event: ApiClientEvents,
  data: any,
  clientSocket: PointingPokerClientSocket
): Promise<any> {
  return new Promise((resolve) => {
    clientSocket.emit(event, data, resolve);
  });
}

export const onEvent = (
  event: ApiServerEvents,
  clientSocket: PointingPokerClientSocket
): Promise<any> => {
  return new Promise((resolve) => clientSocket.on(event, resolve));
};

export const onAnyEvent = (
  clientSocket: PointingPokerClientSocket
): Promise<any> => {
  return new Promise((resolve) =>
    clientSocket.onAny((...args) => {
      // console.log(args);
      resolve(args);
    })
  );
};
