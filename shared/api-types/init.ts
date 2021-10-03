import { GameSettings } from './game-settings';
import { UsersList } from './user';
import { GameResults, IssuesList } from './issue';
import { ChatMessagesList } from './chat';

/**
 * Начальный объект, присылаемый сервером дилеру.
 */
export interface InitDealer {
  /**
   * @format uuid
   */
  gameId: string;
  gameTitle: string;
  gameSettings: GameSettings;
  users: UsersList;
}

/**
 * Начальный объект, присылаемый сервером игроку/наблюдателю.
 */
export interface InitUser {
  /**
   * @format uuid
   */
  gameId: string;
  gameTitle: string;
  users: UsersList;
  /**
   * Если игра уже началась - `undefined`, иначе массив всех (или N последних) сообщений.
   */
  messages?: ChatMessagesList;
  /**
   * Если игра еще не началась - `undefined`, иначе список задач для оценивания.
   */
  issues?: IssuesList;
  /**
   * Если игра еще не началась - `undefined`, иначе выбранные дилером настройки.
   */
  gameSettings?: GameSettings;
  /**
   * Если игра еще не началась - `undefined`, результаты пройденных раундов.
   */
  gameResult?: GameResults;
  /**
   * Активный раунд.
   */
  roundIssueId?: string;
  /**
   * Прогресс по активному раунду.
   */
  roundProgress?: string[];
}
