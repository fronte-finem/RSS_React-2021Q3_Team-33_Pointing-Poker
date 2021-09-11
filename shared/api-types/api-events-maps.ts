import {
  ApiClientEvents,
  ApiClientEventsWithCallback,
  ApiClientEventsWithNoArgs,
  ApiClientEventsWithPayloadAndCallback,
  ApiServerEvents,
} from '@shared/api-types/api-events';
import { DealerToJoin, User, UserToJoin } from '@shared/api-types/user';
import {
  GameResult,
  Issue,
  IssueBase,
  RoundResult,
} from '@shared/api-types/issue';
import { CardScore, GameSettings } from '@shared/api-types/game-settings';
import { InitDealer, InitUser } from '@shared/api-types/init';
import { ChatMessage, KickResult, KickVoteInit } from '@shared/api-types/chat';

type ApiClientEventsMap = { [event in ApiClientEvents]: Function };
type ApiServerEventsMap = { [event in ApiServerEvents]: Function };

export const enum AckResponseStatus {
  FAIL = 'FAIL',
  OK = 'OK',
}
export type AckResponseFail = {
  status: AckResponseStatus.FAIL;
  failMessage: string;
  data: undefined;
};
export type AckResponseOk<Payload> = {
  status: AckResponseStatus.OK;
  failMessage: undefined;
  data: Payload;
};
export type AckResponse<Payload> = AckResponseFail | AckResponseOk<Payload>;
export type AckCallback<Payload> = (response: AckResponse<Payload>) => void;

export const isOk = ({ status }: AckResponse<any>) =>
  status === AckResponseStatus.OK;
export const isFail = ({ status }: AckResponse<any>) =>
  status === AckResponseStatus.FAIL;

export function setFail(message: string): AckResponseFail {
  return {
    status: AckResponseStatus.FAIL,
    failMessage: message,
    data: undefined,
  };
}
export function setOk<Payload>(data: Payload): AckResponseOk<Payload> {
  return {
    status: AckResponseStatus.OK,
    failMessage: undefined,
    data,
  };
}

export interface PointingPokerClientToServerEvents extends ApiClientEventsMap {
  [ApiClientEvents.CREATE_GAME]: (
    dealerToJoin: DealerToJoin,
    ackCallback: AckCallback<InitDealer>
  ) => void;
  [ApiClientEvents.CANCEL_GAME]: () => void;
  [ApiClientEvents.DISCONNECT]: () => void;
  [ApiClientEvents.CHANGE_GAME_TITLE]: (
    title: string,
    ackCallback: AckCallback<string>
  ) => void;
  [ApiClientEvents.JOIN_GAME]: (
    gameId: string,
    ackCallback: AckCallback<string>
  ) => void;
  [ApiClientEvents.ADD_USER]: (
    user: UserToJoin,
    ackCallback: AckCallback<InitUser>
  ) => void;
  [ApiClientEvents.POST_MESSAGE]: (
    message: string,
    ackCallback: AckCallback<string>
  ) => void;
  [ApiClientEvents.KICK_USER]: (
    userId: string,
    ackCallback: AckCallback<string>
  ) => void;
  [ApiClientEvents.VOTE_TO_KICK_USER]: (
    kick: boolean,
    ackCallback: AckCallback<boolean>
  ) => void;
  [ApiClientEvents.ADD_ISSUE]: (
    issue: IssueBase,
    ackCallback: AckCallback<Issue>
  ) => void;
  [ApiClientEvents.DELETE_ISSUE]: (
    issueId: string,
    ackCallback: AckCallback<string>
  ) => void;
  [ApiClientEvents.EDIT_ISSUE]: (
    issue: Issue,
    ackCallback: AckCallback<Issue>
  ) => void;
  [ApiClientEvents.START_GAME]: (
    gameSettings: GameSettings,
    ackCallback: AckCallback<GameSettings>
  ) => void;
  [ApiClientEvents.END_GAME]: (ackCallback: AckCallback<true>) => void;
  [ApiClientEvents.START_ROUND]: (
    issueId: string,
    ackCallback: AckCallback<string>
  ) => void;
  [ApiClientEvents.END_ROUND]: (ackCallback: AckCallback<true>) => void;
  [ApiClientEvents.ADD_SCORE]: (
    score: CardScore,
    ackCallback: AckCallback<CardScore>
  ) => void;
}

export type PointingPokerClientToServerEventsWithPayloadAndCallback = Pick<
  PointingPokerClientToServerEvents,
  ApiClientEventsWithPayloadAndCallback
>;

export type PointingPokerClientToServerEventsWithNoArgs = Pick<
  PointingPokerClientToServerEvents,
  ApiClientEventsWithNoArgs
>;

export type PointingPokerClientToServerEventsWithCallback = Pick<
  PointingPokerClientToServerEvents,
  ApiClientEventsWithCallback
>;

export interface PointingPokerServerToClientEvents extends ApiServerEventsMap {
  [ApiServerEvents.GAME_TITLE_CHANGED]: (title: string) => void;
  [ApiServerEvents.DISCONNECT]: () => void;
  [ApiServerEvents.GAME_CANCELED]: () => void;
  [ApiServerEvents.ALLOW_USER_JOIN]: (
    user: UserToJoin,
    ackCallback: (allow: boolean) => void
  ) => void;
  [ApiServerEvents.USER_JOINED]: (user: User) => void;
  [ApiServerEvents.USER_DISCONNECTED]: (userId: string) => void;
  [ApiServerEvents.MESSAGE_POSTED]: (chatMessage: ChatMessage) => void;
  [ApiServerEvents.KICK_VOTE_STARTED]: (kickVoteInit: KickVoteInit) => void;
  [ApiServerEvents.USER_KICK_RESULT]: (kickResult: KickResult) => void;
  [ApiServerEvents.KICKED]: (reason: string) => void;
  [ApiServerEvents.ISSUE_ADDED]: (issue: Issue) => void;
  [ApiServerEvents.ISSUE_DELETED]: (issueId: string) => void;
  [ApiServerEvents.ISSUE_EDITED]: (issue: Issue) => void;
  [ApiServerEvents.GAME_STARTED]: (gameSettings: GameSettings) => void;
  [ApiServerEvents.GAME_ENDED]: (gameResult: GameResult) => void;
  [ApiServerEvents.ROUND_STARTED]: (issueId: string) => void;
  [ApiServerEvents.ROUND_ENDED]: (roundResult: RoundResult) => void;
  [ApiServerEvents.SCORE_ADDED]: (userId: string) => void;
}
