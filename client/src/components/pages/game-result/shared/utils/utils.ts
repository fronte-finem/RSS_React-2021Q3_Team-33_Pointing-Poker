import { IssueStats } from '@client/utils/issue-stats';
import { GameResultXLS } from '../types/types';

export function getGameResultXLS(stats: IssueStats[]): GameResultXLS[] {
  return stats.map(helper).flat();
}

function helper({ issue, stats }: IssueStats): GameResultXLS[] {
  return stats.map(({ score, percent }) => ({
    issue: issue.title,
    priority: issue.priority,
    score,
    percent: percent.toFixed(1),
  }));
}
