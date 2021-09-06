import { CardScore } from './game-settings';

/**
 * Приоритет задачи
 */
export const enum Priority {
  HIGH = 'high',
  MIDDLE = 'middle',
  LOW = 'low',
}

/**
 * Объект задачи для оценки в процессе игры (приходит от дилера на сервер).
 */
export interface IssueBase {
  title: string;
  /**
   * @format uri
   */
  link: string;
  priority: Priority;
}

/**
 * Объект задачи для оценки в процессе игры (приходит с сервера пользователям).
 */
export interface Issue extends IssueBase {
  /**
   * @format uuid
   */
  id: string;
}

/**
 * Массив задач добавленных дилером для последующей оценки.
 */
export type IssuesList = Array<Issue>;

/**
 * Объект оценки поставленной задаче игроком.
 */
export interface UserScore {
  /**
   * @format uuid
   */
  userId: string;
  score: CardScore;
}

/**
 * Массив оценок поставленных задаче игроками.
 */
export type RoundResult = Array<UserScore>;

/**
 * Объект оценок поставленных задаче игроками.
 */
export interface IssueScore {
  /**
   * @format uuid
   */
  issueId: string;
  scores: RoundResult;
}

/**
 * Массив всех оценённых задач.
 */
export type GameResult = Array<IssueScore>;
