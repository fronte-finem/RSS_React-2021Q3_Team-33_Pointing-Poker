import { IssueBase, Priority } from '@shared/api-types/issue';

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
