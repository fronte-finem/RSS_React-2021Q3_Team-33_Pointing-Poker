import { GameCard } from '@client/components/shared/game-card/game-card';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import React from 'react';
import {
  StyleGameResultCard,
  StyleGameResultIssue,
  StyleGameResultText,
} from '../game-result-styles';
import { CardResults, GameResultsRender } from '../shared/types/types';

export const IssueStats: React.FC<{
  result: GameResultsRender;
  scoreType: string | undefined;
}> = (props) => {
  const { result, scoreType } = props;

  return (
    <div>
      <IssueCard issue={result.issue} />
      <StyleGameResultIssue>
        {result.scores.map((score: CardResults) => (
          <StyleGameResultCard>
            <GameCard
              score={score.score as number}
              scoreType={scoreType || 'SP'}
            />
            <StyleGameResultText>{score.percent} %</StyleGameResultText>
          </StyleGameResultCard>
        ))}
      </StyleGameResultIssue>
    </div>
  );
};
