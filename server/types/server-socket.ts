import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import {
  PointingPokerClientToServerEvents,
  PointingPokerServerToClientEvents,
} from '@shared/api-types/api-events-maps';

export type PointingPokerServer = Server<DefaultEventsMap, DefaultEventsMap>;

type ListenEvents = PointingPokerClientToServerEvents;
type EmitEvents = PointingPokerServerToClientEvents;

export type PointingPokerServerSocket = Socket<ListenEvents, EmitEvents>;
