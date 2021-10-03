import {
  Issue,
  IssueBase,
  IssueScore,
  Priority,
  UserScore,
} from '@shared/api-types/issue';
import { randomUUID } from 'crypto';

type ScoreByIdComparator = (userId: string) => (score: UserScore) => boolean;

const thatId: ScoreByIdComparator = (userId) => (score) =>
  score.userId === userId;

const cloneScore = (score: UserScore): UserScore => ({ ...score });

export class IssueItem {
  private readonly _id: string = randomUUID();
  private _title: string;
  private _link?: string;
  private _priority: Priority;
  private _scores: UserScore[] = [];

  constructor({ title, link, priority }: IssueBase) {
    this._title = title;
    this._link = link;
    this._priority = priority;
  }

  public get id() {
    return this._id;
  }

  public isEqual(issue: IssueBase): boolean {
    return this._title === issue.title;
  }

  public getDTO(): Issue {
    return {
      id: this._id,
      title: this._title,
      link: this._link,
      priority: this._priority,
    };
  }

  public getScore(): IssueScore {
    return {
      issueId: this._id,
      scores: this._scores.map(cloneScore),
    };
  }

  public modify({ title, link, priority }: IssueBase) {
    this._title = title;
    this._link = link;
    this._priority = priority;
  }

  public addScore(score: UserScore) {
    const index = this._scores.findIndex(thatId(score.userId));
    if (index < 0) {
      this._scores.push(score);
    } else {
      this._scores[index] = score;
    }
  }
}
