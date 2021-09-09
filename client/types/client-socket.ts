import { Socket } from 'socket.io-client';
import {
  PointingPokerClientToServerEvents,
  PointingPokerServerToClientEvents,
} from '@shared/api-types/api-events-maps';

type ListenEvents = PointingPokerServerToClientEvents;
type EmitEvents = PointingPokerClientToServerEvents;

export type PointingPokerClientSocket = Socket<ListenEvents, EmitEvents>;
