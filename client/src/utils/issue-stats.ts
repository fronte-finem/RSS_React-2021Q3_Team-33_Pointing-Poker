import { CardScore } from '@shared/api-types/game-card-settings';
import { countItems } from '@shared/utils/array';
import { UserScore } from '@shared/api-types/issue';

export interface IssueStatsMap {
  issueId: string;
  stats: Map<CardScore, number>;
}

export interface CardStats {
  score: CardScore;
  percent: number;
}

export interface IssueStats {
  issueId: string;
  stats: CardStats[];
}

export function countScores(scores: UserScore[]): Map<CardScore, number> {
  return countItems(scores, ({ score }) => score);
}

export function calcStats(statsMap: Map<CardScore, number>): CardStats[] {
  const entries = [...statsMap.entries()];
  const total = entries.reduce((acc, [, count]) => acc + count, 0);
  return entries.map(([score, count]) => ({
    score,
    percent: 100 * (count / total),
  }));
}

export const orderStats = (a: CardStats, b: CardStats) => {
  const percentOrder = b.percent - a.percent;
  if (percentOrder !== 0) return percentOrder;
  if (typeof a.score === 'string') return -1;
  if (typeof b.score === 'string') return 1;
  return a.score - b.score;
};
