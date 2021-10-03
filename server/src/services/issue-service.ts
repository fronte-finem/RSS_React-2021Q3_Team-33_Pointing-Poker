import {
  GameResults,
  Issue,
  IssueBase,
  IssueScore,
  IssuesList,
  UserScore,
} from '@shared/api-types/issue';
import { IssueItem } from '@server/models/issue-item';

export class IssueService {
  private _store: IssueItem[] = [];
  private _activeIssueItem: null | IssueItem = null;
  private _isActiveRun: boolean = false;
  private _timerId: null | NodeJS.Timeout = null;

  public getIssues(): IssuesList {
    return this._store.map((item) => item.getDTO());
  }

  public isInStore(issueData: IssueBase): boolean {
    return this._store.some((item) => item.isEqual(issueData));
  }

  public init(issues: IssueBase[]): Issue[] {
    this._store = issues.map((data) => new IssueItem(data));
    return this._store.map((item) => item.getDTO());
  }

  public add(issueData: IssueBase): Issue | undefined {
    if (this.isInStore(issueData)) return undefined;
    const item = new IssueItem(issueData);
    this._store.push(item);
    return item.getDTO();
  }

  private findItem(issueId: string): IssueItem | undefined {
    return this._store.find((item) => item.id === issueId);
  }

  public find(issueId: string): Issue | undefined {
    return this.findItem(issueId)?.getDTO();
  }

  public delete(issueId: string): void {
    this._store = this._store.filter((item) => item.id !== issueId);
  }

  public modify(issue: Issue): Issue | undefined {
    const item = this.findItem(issue.id);
    if (!item) return undefined;
    if (this.isInStore(issue)) return undefined;
    item.modify(issue);
    return item.getDTO();
  }

  public destroy(): void {
    this._store = [];
  }

  public start(issueId: string, timerId: null | NodeJS.Timeout = null): void {
    if (this._isActiveRun) return;
    const item = this.findItem(issueId);
    if (!item) return;
    this._isActiveRun = true;
    this._activeIssueItem = item;
    this._timerId = timerId;
  }

  public get isRoundActive(): boolean {
    return Boolean(this._activeIssueItem);
  }

  public get isRoundActiveRun(): boolean {
    return this._isActiveRun;
  }

  public get activeId(): string | undefined {
    return this._activeIssueItem?.id;
  }

  public getRoundScore(): IssueScore | null {
    return this._activeIssueItem && this._activeIssueItem.getScore();
  }

  public end(): IssueScore | undefined {
    if (!this._activeIssueItem) return undefined;
    const issueScore = this._activeIssueItem.getScore();
    this._isActiveRun = false;
    if (this._timerId) {
      global.clearTimeout(this._timerId);
      this._timerId = null;
    }
    return issueScore;
  }

  public addScore(score: UserScore): void {
    if (!this._activeIssueItem) return;
    this._activeIssueItem.addScore(score);
  }

  public get activeProgress(): string[] | undefined {
    return this._activeIssueItem?.getProgress();
  }

  public getResults(): GameResults {
    return this._store.map((item) => item.getScore());
  }
}
