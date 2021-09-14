import { randomUUID } from 'crypto';
import { ApiFailMessage } from '@server/api-fail-message';
import { Issue, IssueBase, IssuesList } from '@shared/api-types/issue';

export const issueEquality = (issue1: IssueBase, issue2: IssueBase): boolean =>
  issue1.title === issue2.title;

const cloneIssue = (issue: Issue): Issue => ({ ...issue });

type IssueByIdComparator = (issueId: string) => (issue: Issue) => boolean;

const thatIssue: IssueByIdComparator =
  (issueId) =>
  ({ id }) =>
    id === issueId;

const notThatIssue: IssueByIdComparator =
  (issueId) =>
  ({ id }) =>
    id !== issueId;

export class IssueService {
  private _store: Issue[] = [];

  public getIssues(): IssuesList {
    return this._store.map(cloneIssue);
  }

  public isInStore(issueData: IssueBase): boolean {
    return this._store.some((issue) => issueEquality(issue, issueData));
  }

  public add(issueData: IssueBase): Issue {
    if (this.isInStore(issueData))
      throw new Error(ApiFailMessage.SAME_TITLE_ISSUE_ALREADY_EXIST);
    const newIssue: Issue = { ...issueData, id: randomUUID() };
    this._store.push(newIssue);
    return cloneIssue(newIssue);
  }

  public find(issueId: string): Issue | undefined {
    return this._store.find(thatIssue(issueId));
  }

  public delete(issueId: string): void {
    this._store = this._store.filter(notThatIssue(issueId));
  }

  public modify(issue: Issue): Issue {
    const index = this._store.findIndex(thatIssue(issue.id));
    if (index < 0) throw new Error(ApiFailMessage.ISSUE_NOT_FOUND);
    this._store[index] = issue;
    return cloneIssue(issue);
  }

  public destroy(): void {
    this._store = [];
  }
}
