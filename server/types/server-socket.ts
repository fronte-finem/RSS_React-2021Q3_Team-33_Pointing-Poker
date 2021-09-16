import { Server, Socket } from 'socket.io';
import {
  PointingPokerClientToServerEvents,
  PointingPokerServerToClientEvents,
} from '@shared/api-types/api-events-maps';

type ListenEvents = PointingPokerClientToServerEvents;
type EmitEvents = PointingPokerServerToClientEvents;

export type PointingPokerServer = Server<ListenEvents, EmitEvents>;

export type PointingPokerServerSocket = Socket<ListenEvents, EmitEvents>;
