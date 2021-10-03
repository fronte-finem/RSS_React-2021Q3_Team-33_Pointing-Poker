import { IssueBase, Priority } from '@shared/api-types/issue';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { ISSUE_TITLE_MAX_LENGTH } from '@shared/api-validation/api-constants';

export const PRIORITY_VALUES = Object.values(Priority);

const isNoEmptyString = (prop: unknown): boolean =>
  typeof prop === 'string' && prop.length > 0;

const isPriority = (prop: string): boolean =>
  new Set(PRIORITY_VALUES).has(prop as Priority);

export const validateIssue = (
  data: Record<string, any>
): IssueBase | undefined => {
  if (typeof data !== 'object') return undefined;
  if (data === null) return undefined;

  if (typeof data.title === 'number') {
    data.title = String(data.title);
  }

  if (!isNoEmptyString(data.title)) return undefined;
  if (!isNoEmptyString(data.priority)) return undefined;

  data.priority = data.priority.toLowerCase();
  if (!isPriority(data.priority)) return undefined;

  return data as IssueBase;
};

export const filterIssues = (issues: IssueBase[]): IssueBase[] =>
  issues
    .map(validateIssue)
    .filter((issue): issue is IssueBase => issue !== undefined);

export const validateIssueTitle = (
  issue?: IssueBase,
  issues?: IssueBase[]
): string | undefined => {
  if (!issue || !issue.title) {
    return ApiFailMessage.ISSUE_NEED_TITLE;
  }
  if (issue.title.length > ISSUE_TITLE_MAX_LENGTH) {
    return `${ApiFailMessage.ISSUE_TITLE_TO_LONG}${ISSUE_TITLE_MAX_LENGTH}`;
  }
  if (issues?.some((item) => item.title === issue.title)) {
    return ApiFailMessage.SAME_TITLE_ISSUE_ALREADY_EXIST;
  }
  return undefined;
};

const getPriorities = () => Object.values(Priority).join(', ');

export const validateIssuePriority = ({
  priority,
}: IssueBase): string | undefined => {
  if (isPriority(priority)) return undefined;
  return `${ApiFailMessage.ISSUE_NEED_PRIORITY}${getPriorities()}`;
};
