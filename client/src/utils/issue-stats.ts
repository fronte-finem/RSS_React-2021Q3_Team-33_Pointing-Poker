import {
  CardScore,
  cardScoreToNum,
  isNoneScore,
  isRealScore,
} from '@shared/api-types/game-card-settings';
import { countItems } from '@shared/utils/array';
import { Issue, UserScore } from '@shared/api-types/issue';
import { calcAverage, calcMedian } from '@shared/utils/statistic';

export interface IssueStatsMap {
  issueId: string;
  stats: Map<CardScore, number>;
}

export interface CardStats {
  score: CardScore;
  percent: number;
}

export interface IssueStats {
  issue: Issue;
  stats: CardStats[];
}

export function countScores(scores: UserScore[]): Map<CardScore, number> {
  return countItems(
    scores.filter(({ score }) => isRealScore(score)),
    ({ score }) => score
  );
}

function filterNumCards(scores: UserScore[]): number[] {
  return scores
    .map(({ score }) => cardScoreToNum(score))
    .filter((score): score is number => score !== undefined);
}

type StatsParams = {
  average: number;
  median: number;
};

export function calcStatsParams(userScores: UserScore[]): StatsParams {
  const scores = filterNumCards(userScores);
  return {
    average: calcAverage(scores),
    median: calcMedian(scores),
  };
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
  if (isNoneScore(a.score)) return 1;
  if (isNoneScore(b.score)) return -1;
  if (typeof a.score === 'string') return -1;
  if (typeof b.score === 'string') return 1;
  return a.score! - b.score!;
};
