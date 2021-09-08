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
   * payload: {@link DealerToJoin DealerToJoin '@shared/api-types/user'}
   */
  CREATE_GAME = 'create game',
  /**
   * no payload
   */
  CANCEL_GAME = 'cancel game',
  /**
   * payload: {@link String} - game name
   */
  CHANGE_GAME_TITLE = 'change game title',
  /**
   * payload: {@link String} - game-id
   */
  JOIN_GAME = 'join game',
  /**
   * payload: {@link UserToJoin UserToJoin '@shared/api-types/user'}
   */
  ADD_USER = 'add user',
  /**
   * payload: {@link Boolean} - true(yes) or false(no)
   */
  IS_USER_JOIN_ALLOWED = 'is user join allowed',
  /**
   * no payload
   */
  DISCONNECT = 'disconnect',
  /**
   * payload: {@link String} - message
   */
  POST_MESSAGE = 'post message',
  /**
   * payload: {@link String} - user-id
   */
  KICK_USER = 'kick user',
  /**
   * payload: {@link Boolean} - true(yes) or false(no)
   */
  VOTE_TO_KICK_USER = 'vote to kick user',
  /**
   * payload: {@link IssueBase IssueBase '@shared/api-types/issue'}
   */
  ADD_ISSUE = 'add issue',
  /**
   * payload: {@link String} - issue-id
   */
  DELETE_ISSUE = 'delete issue',
  /**
   * payload: {@link Issue Issue '@shared/api-types/issue'}
   */
  EDIT_ISSUE = 'edit issue',
  /**
   * payload: {@link GameSettings GameSettings '@shared/api-types/game-settings'}
   */
  START_GAME = 'start game',
  /**
   * no payload
   */
  END_GAME = 'end game',
  /**
   * payload: {@link String} - issue-id
   */
  START_ROUND = 'start round',
  /**
   * no payload
   */
  END_ROUND = 'end round',
  /**
   * payload: {@link CardScore CardScore '@shared/api-types/game-settings'}
   */
  ADD_SCORE = 'add score',
}

/**
 * Набор событий инициируемых сервером.
 */
export const enum ApiServerEvents {
  /**
   * payload: {@link String} - fail description
   */
  CREATE_GAME_FAILED = 'create game failed',
  /**
   * payload: {@link InitDealer InitDealer '@shared/api-types/init'}
   */
  GAME_CREATED = 'game created',
  /**
   * no payload
   */
  GAME_CANCELED = 'game canceled',
  /**
   * payload: {@link String} - fail description
   */
  CHANGE_GAME_TITLE_FAILED = 'change game title failed',
  /**
   * payload: {@link String} - new game name
   */
  GAME_TITLE_CHANGED = 'game title changed',
  /**
   * payload: {@link String} - fail description
   */
  JOIN_GAME_FAILED = 'join game failed',
  /**
   * no payload
   */
  READY_TO_ADD_USER = 'ready to add user',
  /**
   * payload: {@link UserToJoin UserToJoin '@shared/api-types/user'}
   */
  ALLOW_USER_JOIN = 'allow user join',
  /**
   * payload: {@link String} - fail description
   */
  LOGIN_FAILED = 'login failed',
  /**
   * payload: {@link InitUser InitUser '@shared/api-types/init'}
   */
  LOGGED_IN = 'logged in',
  /**
   * payload: {@link User User '@shared/api-types/user'}
   */
  USER_JOINED = 'user joined',
  /**
   * payload: {@link String} - user-id
   */
  USER_DISCONNECTED = 'user disconnected',
  /**
   * payload: {@link String} - fail description
   */
  POST_MESSAGE_FAILED = 'post message failed',
  /**
   * payload: {@link ChatMessage ChatMessage '@shared/api-types/chat'}
   */
  MESSAGE_POSTED = 'message posted',
  /**
   * payload: {@link String} - fail description
   */
  KICK_USER_FAILED = 'kick user failed',
  /**
   * payload: {@link KickVoteInit KickVoteInit '@shared/api-types/chat'}
   */
  KICK_VOTE_STARTED = 'kick vote started',
  /**
   * payload: {@link String} - fail description
   */
  VOTE_TO_KICK_USER_FAILED = 'vote to kick user failed',
  /**
   * payload: {@link KickResult KickResult '@shared/api-types/chat'}
   */
  USER_KICK_RESULT = 'user kick result',
  /**
   * payload: {@link String} - kick reason
   */
  KICKED = 'kicked',
  /**
   * payload: {@link String} - fail description
   */
  ADD_ISSUE_FAILED = 'add issue failed',
  /**
   * payload: {@link Issue Issue '@shared/api-types/issue'}
   */
  ISSUE_ADDED = 'issue added',
  /**
   * payload: {@link String} - fail description
   */
  DELETE_ISSUE_FAILED = 'delete issue failed',
  /**
   * payload: {@link String} - issue-id
   */
  ISSUE_DELETED = 'issue deleted',
  /**
   * payload: {@link String} - fail description
   */
  EDIT_ISSUE_FAILED = 'edit issue failed',
  /**
   * payload: {@link Issue Issue '@shared/api-types/issue'}
   */
  ISSUE_EDITED = 'issue edited',
  /**
   * payload: {@link String} - fail description
   */
  START_GAME_FAILED = 'start game failed',
  /**
   * payload: {@link GameSettings GameSettings '@shared/api-types/game-settings'}
   */
  GAME_STARTED = 'game started',
  /**
   * payload: {@link String} - fail description
   */
  END_GAME_FAILED = 'end game failed',
  /**
   * payload: {@link GameResult GameResult '@shared/api-types/issue'}
   */
  GAME_ENDED = 'game ended',
  /**
   * payload: {@link String} - fail description
   */
  START_ROUND_FAILED = 'start round failed',
  /**
   * payload: {@link String} - issue-id
   */
  ROUND_STARTED = 'round started',
  /**
   * payload: {@link String} - fail description
   */
  END_ROUND_FAILED = 'end round failed',
  /**
   * payload: {@link RoundResult RoundResult '@shared/api-types/issue'}
   */
  ROUND_ENDED = 'round ended',
  /**
   * payload: {@link String} - fail description
   */
  ADD_SCORE_FAILED = 'add score failed',
  /**
   * payload: {@link String} - user-id
   */
  SCORE_ADDED = 'score added',
}
