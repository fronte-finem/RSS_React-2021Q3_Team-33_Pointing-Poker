import { ApiClientEvents, ApiServerEvents } from '@shared/api-types/api-events';
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

type NoPayloadHandler = () => void;
type FailHandler = (description: string) => void;

type ApiClientEventsMap = { [event in ApiClientEvents]: Function };
type ApiServerEventsMap = { [event in ApiServerEvents]: Function };

export interface PointingPokerClientToServerEvents extends ApiClientEventsMap {
  [ApiClientEvents.CREATE_GAME]: (dealerToJoin: DealerToJoin) => void;
  [ApiClientEvents.CANCEL_GAME]: NoPayloadHandler;
  [ApiClientEvents.DISCONNECT]: NoPayloadHandler;
  [ApiClientEvents.CHANGE_GAME_TITLE]: (title: string) => void;
  [ApiClientEvents.JOIN_GAME]: (gameId: string) => void;
  [ApiClientEvents.ADD_USER]: (user: UserToJoin) => void;
  [ApiClientEvents.IS_USER_JOIN_ALLOWED]: (isAllowed: boolean) => void;
  [ApiClientEvents.POST_MESSAGE]: (message: string) => void;
  [ApiClientEvents.KICK_USER]: (userId: string) => void;
  [ApiClientEvents.VOTE_TO_KICK_USER]: (kick: boolean) => void;
  [ApiClientEvents.ADD_ISSUE]: (issue: IssueBase) => void;
  [ApiClientEvents.DELETE_ISSUE]: (issueId: string) => void;
  [ApiClientEvents.EDIT_ISSUE]: (issue: Issue) => void;
  [ApiClientEvents.START_GAME]: (gameSettings: GameSettings) => void;
  [ApiClientEvents.END_GAME]: NoPayloadHandler;
  [ApiClientEvents.START_ROUND]: (issueId: string) => void;
  [ApiClientEvents.END_ROUND]: NoPayloadHandler;
  [ApiClientEvents.ADD_SCORE]: (score: CardScore) => void;
}

export interface PointingPokerServerToClientEvents extends ApiServerEventsMap {
  [ApiServerEvents.CREATE_GAME_FAILED]: FailHandler;
  [ApiServerEvents.GAME_CREATED]: (initDealer: InitDealer) => void;
  [ApiServerEvents.GAME_CANCELED]: NoPayloadHandler;
  [ApiServerEvents.CHANGE_GAME_TITLE_FAILED]: FailHandler;
  [ApiServerEvents.GAME_TITLE_CHANGED]: (title: string) => void;
  [ApiServerEvents.JOIN_GAME_FAILED]: FailHandler;
  [ApiServerEvents.READY_TO_ADD_USER]: NoPayloadHandler;
  [ApiServerEvents.ALLOW_USER_JOIN]: (user: UserToJoin) => void;
  [ApiServerEvents.LOGIN_FAILED]: FailHandler;
  [ApiServerEvents.LOGGED_IN]: (initUser: InitUser) => void;
  [ApiServerEvents.USER_JOINED]: (user: User) => void;
  [ApiServerEvents.USER_DISCONNECTED]: (userId: string) => void;
  [ApiServerEvents.POST_MESSAGE_FAILED]: FailHandler;
  [ApiServerEvents.MESSAGE_POSTED]: (chatMessage: ChatMessage) => void;
  [ApiServerEvents.KICK_USER_FAILED]: FailHandler;
  [ApiServerEvents.KICK_VOTE_STARTED]: (kickVoteInit: KickVoteInit) => void;
  [ApiServerEvents.VOTE_TO_KICK_USER_FAILED]: FailHandler;
  [ApiServerEvents.USER_KICK_RESULT]: (kickResult: KickResult) => void;
  [ApiServerEvents.KICKED]: (reason: string) => void;
  [ApiServerEvents.ADD_ISSUE_FAILED]: FailHandler;
  [ApiServerEvents.ISSUE_ADDED]: (issue: Issue) => void;
  [ApiServerEvents.DELETE_ISSUE_FAILED]: FailHandler;
  [ApiServerEvents.ISSUE_DELETED]: (issueId: string) => void;
  [ApiServerEvents.EDIT_ISSUE_FAILED]: FailHandler;
  [ApiServerEvents.ISSUE_EDITED]: (issue: Issue) => void;
  [ApiServerEvents.START_GAME_FAILED]: FailHandler;
  [ApiServerEvents.GAME_STARTED]: (gameSettings: GameSettings) => void;
  [ApiServerEvents.END_GAME_FAILED]: FailHandler;
  [ApiServerEvents.GAME_ENDED]: (gameResult: GameResult) => void;
  [ApiServerEvents.START_ROUND_FAILED]: FailHandler;
  [ApiServerEvents.ROUND_STARTED]: (issueId: string) => void;
  [ApiServerEvents.END_ROUND_FAILED]: FailHandler;
  [ApiServerEvents.ROUND_ENDED]: (roundResult: RoundResult) => void;
  [ApiServerEvents.ADD_SCORE_FAILED]: FailHandler;
  [ApiServerEvents.SCORE_ADDED]: (userId: string) => void;
}
