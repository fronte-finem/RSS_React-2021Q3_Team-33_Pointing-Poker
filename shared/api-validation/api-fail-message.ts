export const enum ApiFailMessage {
  GAME_NEED_TITLE = 'Need some title for game, empty name pointless!',
  GAME_TITLE_TO_LONG = 'Game title to long! Max length: ',
  USER_NEED_NAME = 'Need user name!',
  MESSAGE_EMPTY = 'Message is required!',
  MESSAGE_TO_LONG = 'Message to long, max accepted length - ',
  GAME_NOT_EXIST = 'Game with that id not exist!',
  SAME_USER_ALREADY_EXIST = 'User with same data already in game-room!',
  USER_WITH_SOCKET_ID_EXIST = 'User with same socket-id already in game-room!',
  DEALER_REJECTED_LOGIN = 'Game already started, dealer rejected your login!',
  NO_SELF_KICK = 'Self kick not supported 😉',
  NO_DEALER_KICK = 'Dealer not kickable 😉',
  NO_USER_FOR_KICK = 'User with that id not found 😉',
  KICK_VOTE_ALREADY_STARTED = 'Kick vote already started!',
  NOT_ENOUGH_USERS_FOR_KICK_VOTE = 'Not enough users for kick vote!',
  NO_ACTIVE_KICK_VOTE = 'No active kick vote!',
  SAME_TITLE_ISSUE_ALREADY_EXIST = 'Issue with same title already exist!',
  ISSUE_NOT_FOUND = 'Issue with what id not found in store!',
  ISSUE_NEED_TITLE = 'Need some title for issue',
  ISSUE_TITLE_TO_LONG = 'Issue title to long! Max length: ',
  ISSUE_NEED_PRIORITY = 'Issue need priority: ',
  NO_ACTIVE_ROUND = 'No active round for add score',
  ACTIVE_ROUND = 'Another round active now',
  GAME_STARTED = 'Game already started!',
  GAME_NOT_STARTED = 'Game not started yet!',
  DEALER_NOT_GAMER = 'Dealer no gamer by selected settings!',
  SOCKET_OF_USER_FOR_KICK_NOT_FOUND = 'Socket of user for kick not found!',
}
