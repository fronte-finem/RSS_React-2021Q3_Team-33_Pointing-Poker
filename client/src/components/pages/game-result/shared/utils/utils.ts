import { CardScore } from '@shared/api-types/game-settings';
import { RoundResults, UserScore } from '@shared/api-types/issue';
import { CardResults, GameResultsRender, GameResultXLS } from '../types/types';

export const setScores = (scores: RoundResults) => {
  const replayScores = scores.reduce<Record<CardScore, number>>(
    (prev, item: UserScore) => {
      const prevCopy = { ...prev };
      if (item.score in prev) {
        prevCopy[item.score] += 1;
      } else {
        prevCopy[item.score] = 1;
      }
      return prevCopy;
    },
    {}
  );

  const scoresResult: CardResults[] = [];

  Object.keys(replayScores).forEach((element) => {
    scoresResult.push({
      score: element,
      percent: ((replayScores[element] / scores.length) * 100).toFixed(1),
    });
  });
  return scoresResult;
};

export function getGameResultXLS(
  gameResults: GameResultsRender[]
): GameResultXLS[] {
  return gameResults.map(helper).flat();
}

function helper({ issue, scores }: GameResultsRender): GameResultXLS[] {
  return scores.map(({ score, percent }) => ({
    issue: issue.title,
    priority: issue.priority,
    score,
    percent,
  }));
}
