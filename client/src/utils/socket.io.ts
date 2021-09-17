import { PointingPokerClientSocket } from 'types/client-socket';
import {
  io as ioClient,
  ManagerOptions,
  SocketOptions,
} from 'socket.io-client';
import { PointingPokerClientToServerEvents } from '@shared/api-types/api-events-maps';
import {
  ApiClientEventsWithCallback,
  ApiClientEventsWithPayloadAndCallback,
} from '@shared/api-types/api-events';

const devAddress = `http://localhost:${import.meta.env.VITE_DEV_PORT}/`;

const clientOpts: Partial<ManagerOptions & SocketOptions> = {
  forceNew: true,
  transports: ['websocket'],
};

export const connect = (): Promise<PointingPokerClientSocket> => {
  const socket = import.meta.env.DEV
    ? ioClient(devAddress, clientOpts)
    : ioClient(clientOpts);
  return new Promise<PointingPokerClientSocket>((resolve) =>
    socket.on('connect', () => resolve(socket))
  );
};

type EventSubset = ApiClientEventsWithPayloadAndCallback;
type EventMapSubset = PointingPokerClientToServerEvents;
type EventHandler<E extends EventSubset> = EventMapSubset[E];
type EventHandlerArgs<E extends EventSubset> = Parameters<EventHandler<E>>;
type EventPayload<E extends EventSubset> = EventHandlerArgs<E>[0];
type EventCallback<E extends EventSubset> = EventHandlerArgs<E>[1];
type EventCallbackArgs<E extends EventSubset> = Parameters<EventCallback<E>>;
type EventCallbackResponse<E extends EventSubset> = EventCallbackArgs<E>[0];

export function emitWithPayloadAndCallback<Event extends EventSubset>(
  event: Event,
  payload: EventPayload<Event>,
  socket: PointingPokerClientSocket
): Promise<EventCallbackResponse<Event>> {
  return new Promise((resolve) => {
    // @ts-ignore
    socket.emit(event, payload, resolve);
  });
}

export function emitWithCallback<Event extends ApiClientEventsWithCallback>(
  event: Event,
  socket: PointingPokerClientSocket
): Promise<
  Parameters<Parameters<PointingPokerClientToServerEvents[Event]>[0]>[0]
> {
  return new Promise((resolve) => {
    // @ts-ignore
    socket.emit(event, resolve);
  });
}
