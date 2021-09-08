export const enum ApiFailMessage {
  GAME_NEED_TITLE = 'Need some title for game, empty name pointless!',
  USER_NEED_NAME = 'Need user name!',
  MESSAGE_EMPTY = 'Message is empty!',
  MESSAGE_TO_LONG = 'Message to long!',
  GAME_NOT_EXIST = 'Game with that id not exist!',
  SAME_USER_ALREADY_EXIST = 'User with same data already in game-room!',
  USER_WITH_SOCKET_ID_EXIST = 'User with same socket-id already in game-room!',
  DEALER_REJECTED_LOGIN = 'Game already started, dealer rejected your login!',
}
