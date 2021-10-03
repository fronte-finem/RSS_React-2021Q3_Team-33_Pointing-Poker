import { CardScore } from '@shared/api-types/game-card-settings';

/**
 * Приоритет задачи
 */
export enum Priority {
  HIGH = 'high',
  MIDDLE = 'middle',
  LOW = 'low',
}

/**
 * Объект задачи для оценки в процессе игры (приходит от дилера на сервер).
 */
export interface IssueBase {
  title: string;
  priority: Priority;
  /**
   * @format uri
   */
  link?: string;
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
export type RoundResults = Array<UserScore>;

/**
 * Объект оценок поставленных задаче игроками.
 */
export interface IssueScore {
  /**
   * @format uuid
   */
  issueId: string;
  scores: RoundResults;
}

/**
 * Массив всех оценённых задач.
 */
export type GameResults = Array<IssueScore>;
