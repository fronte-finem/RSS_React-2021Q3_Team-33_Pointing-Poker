/**
 * @external { import("./user").DealerToJoin } DealerToJoin
 * @external { import("./user").UserToJoin } UserToJoin
 * @external { import("./user").User } User
 * @external { import("./init").InitDealer } InitDealer
 * @external { import("./init").InitUser } InitUser
 * @external { import("./chat").ChatMessage } ChatMessage
 * @external { import("./chat").KickVoteInit } KickVoteInit
 * @external { import("./chat").KickResult } KickResult
 * @external { import("./issue").IssueBase } IssueBase
 * @external { import("./issue").Issue } Issue
 * @external { import("./issue").GameResult } GameResult
 * @external { import("./issue").RoundResult } RoundResult
 * @external { import("./game-settings").GameSettings } GameSettings
 * @external { import("./game-settings").CardScore } CardScore
 */

/**
 * Набор событий инициируемых клиентом.
 */
export const enum ApiClientEvents {
  /**
   * - payload: {@link DealerToJoin}
   * - callback: {@link String fail-message} | {@link InitDealer}
   */
  CREATE_GAME = 'create game',
  /**
   * no payload
   */
  CANCEL_GAME = 'cancel game',
  /**
   * - payload: {@link String game-title}
   * - callback: {@link String fail-message} | {@link String game-title}
   */
  CHANGE_GAME_TITLE = 'change game title',
  /**
   * - payload: {@link String game-id}
   * - callback: {@link String fail-message} | {@link String game-id}
   */
  JOIN_GAME = 'join game',
  /**
   * - payload: {@link UserToJoin}
   * - callback: {@link String fail-message} | {@link InitUser}
   */
  ADD_USER = 'add user',
  /**
   * no payload
   */
  DISCONNECT = 'disconnect',
  /**
   * - payload: {@link String message}
   * - callback: {@link String fail-message} | {@link String message}
   */
  POST_MESSAGE = 'post message',
  /**
   * - payload: {@link String user-id}
   * - callback: {@link String fail-message} | {@link String user-id}
   */
  KICK_USER = 'kick user',
  /**
   * - payload: {@link Boolean vote}
   * - callback: {@link String fail-message} | {@link Boolean vote}
   */
  VOTE_TO_KICK_USER = 'vote to kick user',
  /**
   * - payload: {@link IssueBase}
   * - callback: {@link String fail-message} | {@link Issue}
   */
  ADD_ISSUE = 'add issue',
  /**
   * - payload: {@link String issue-id}
   * - callback: {@link String fail-message} | {@link String issue-id}
   */
  DELETE_ISSUE = 'delete issue',
  /**
   * - payload: {@link Issue}
   * - callback: {@link String fail-message} | {@link Issue}
   */
  EDIT_ISSUE = 'edit issue',
  /**
   * - payload: {@link GameSettings}
   * - callback: {@link String fail-message} | {@link GameSettings}
   */
  START_GAME = 'start game',
  /**
   * - no payload
   * - callback: {@link String fail-message} | {@link Boolean true}
   */
  END_GAME = 'end game',
  /**
   * - payload: {@link String issue-id}
   * - callback: {@link String fail-message} | {@link String issue-id}
   */
  START_ROUND = 'start round',
  /**
   * - no payload
   * - callback: {@link String fail-message} | {@link Boolean true}
   */
  END_ROUND = 'end round',
  /**
   * - payload: {@link CardScore}
   * - callback: {@link String fail-message} | {@link CardScore}
   */
  ADD_SCORE = 'add score',
}

export type ApiClientEventsWithPayloadAndCallback = Exclude<
  ApiClientEvents,
  | ApiClientEvents.CANCEL_GAME
  | ApiClientEvents.DISCONNECT
  | ApiClientEvents.END_GAME
  | ApiClientEvents.END_ROUND
>;

export type ApiClientEventsWithNoArgs = Extract<
  ApiClientEvents,
  ApiClientEvents.CANCEL_GAME | ApiClientEvents.DISCONNECT
>;

export type ApiClientEventsWithCallback = Extract<
  ApiClientEvents,
  ApiClientEvents.END_GAME | ApiClientEvents.END_ROUND
>;

/**
 * Набор событий инициируемых сервером.
 */
export const enum ApiServerEvents {
  /**
   * no payload
   */
  DISCONNECT = 'disconnect',
  /**
   * - no payload
   */
  GAME_CANCELED = 'game canceled',
  /**
   * - payload: {@link String game-title}
   */
  GAME_TITLE_CHANGED = 'game title changed',
  /**
   * - payload: {@link UserToJoin}
   * - callback: {@link Boolean allow}
   */
  ALLOW_USER_JOIN = 'allow user join',
  /**
   * - payload: {@link User}
   */
  USER_JOINED = 'user joined',
  /**
   * - payload: {@link String user-id}
   */
  USER_DISCONNECTED = 'user disconnected',
  /**
   * - payload: {@link ChatMessage}
   */
  MESSAGE_POSTED = 'message posted',
  /**
   * - payload: {@link KickVoteInit}
   */
  KICK_VOTE_STARTED = 'kick vote started',
  /**
   * - payload: {@link KickResult}
   */
  USER_KICK_RESULT = 'user kick result',
  /**
   * - payload: {@link String kick-reason}
   */
  KICKED = 'kicked',
  /**
   * - payload: {@link Issue}
   */
  ISSUE_ADDED = 'issue added',
  /**
   * - payload: {@link String issue-id}
   */
  ISSUE_DELETED = 'issue deleted',
  /**
   * - payload: {@link Issue}
   */
  ISSUE_EDITED = 'issue edited',
  /**
   * - payload: {@link GameSettings}
   */
  GAME_STARTED = 'game started',
  /**
   * - payload: {@link GameResult}
   */
  GAME_ENDED = 'game ended',
  /**
   * - payload: {@link String issue-id}
   */
  ROUND_STARTED = 'round started',
  /**
   * - payload: {@link RoundResult}
   */
  ROUND_ENDED = 'round ended',
  /**
   * - payload: {@link String user-id}
   */
  SCORE_ADDED = 'score added',
}
