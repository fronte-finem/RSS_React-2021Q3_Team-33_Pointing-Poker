import { PointingPokerClientSocket } from 'types/client-socket';
import { io as ioClient } from 'socket.io-client';
import { PointingPokerClientToServerEvents } from '@shared/api-types/api-events-maps';
import {
  ApiClientEventsWithCallback,
  ApiClientEventsWithPayloadAndCallback,
} from '@shared/api-types/api-events';

const ADDRESS = `http://localhost`;
const PORT = 42424;

export const connect = (
  address: string = ADDRESS,
  port: number = PORT
): Promise<PointingPokerClientSocket> => {
  const socket = ioClient(`${address}:${port}`);
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
