/**
 * Объект сообщения чата рассылаемый сервером
 */
export interface ChatMessage {
  /**
   * @format uuid
   */
  userId: string;
  message: string;
  /**
   * @format date-time
   */
  date: string;
}

/**
 * Массив сообщений чата.
 */
export type ChatMessagesList = Array<ChatMessage>;

/**
 * Объект для уведомления о начале голосования по удалению пользователя.
 */
export interface KickVoteInit {
  /**
   * пользователь на удаление
   * @format uuid
   */
  badUserId: string;
  /**
   * пользователь начавший голосование
   * @format uuid
   */
  initiatorId: string;
}

/**
 * Объект для уведомления о результате решения по удалению пользователя.
 */
export interface KickResult {
  /**
   * пользователь на удаление
   * @format uuid
   */
  badUserId: string;
  /**
   * был пользователь удален или нет
   */
  kicked: boolean;
  /**
   * описание причины по которой был удален (не удален) пользователь
   */
  reason: string;
}
