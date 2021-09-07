export const enum ApiClientEvents {
  CREATE_GAME = 'create game',
  CANCEL_GAME = 'cancel game',
  CHANGE_GAME_TITLE = 'change game title',
  JOIN_GAME = 'join game',
  ADD_USER = 'add user',
  IS_USER_JOIN_ALLOWED = 'is user join allowed',
  DISCONNECT = 'disconnect',
  POST_MESSAGE = 'post message',
  KICK_USER = 'kick user',
  VOTE_TO_KICK_USER = 'vote to kick user',
  ADD_ISSUE = 'add issue',
  START_GAME = 'start game',
  END_GAME = 'end game',
  START_ROUND = 'start round',
  END_ROUND = 'end round',
  ADD_SCORE = 'add score',
}

export const enum ApiServerEvents {
  CREATE_GAME_FAILED = 'create game failed',
  GAME_CREATED = 'game created',
  CANCEL_GAME_FAILED = 'cancel game failed',
  GAME_CANCELED = 'game canceled',
  CHANGE_GAME_TITLE_FAILED = 'change game title failed',
  GAME_TITLE_CHANGED = 'game title changed',
  JOIN_GAME_FAILED = 'join game failed',
  READY_TO_ADD_USER = 'ready to add user',
  ALLOW_USER_JOIN = 'allow user join',
  LOGIN_ERROR = 'login error',
  LOGGED_IN = 'logged in',
  USER_JOINED = 'user joined',
  USER_DISCONNECTED = 'user disconnected',
  POST_MESSAGE_FAILED = 'post message failed',
  MESSAGE_POSTED = 'message posted',
  KICK_USER_FAILED = 'kick user failed',
  KICK_VOTE_STARTED = 'kick vote started',
  VOTE_TO_KICK_USER_FAILED = 'vote to kick user failed',
  USER_KICK_RESULT = 'user kick result',
  KICKED = 'kicked',
  ADD_ISSUE_FAILED = 'add issue failed',
  ISSUE_ADDED = 'issue added',
  START_GAME_FAILED = 'start game failed',
  GAME_STARTED = 'game started',
  END_GAME_FAILED = 'end game failed',
  GAME_ENDED = 'game ended',
  START_ROUND_FAILED = 'start round failed',
  ROUND_STARTED = 'round started',
  END_ROUND_FAILED = 'end round failed',
  ROUND_ENDED = 'round ended',
  ADD_SCORE_FAILED = 'add score failed',
  SCORE_ADDED = 'score added',
}
