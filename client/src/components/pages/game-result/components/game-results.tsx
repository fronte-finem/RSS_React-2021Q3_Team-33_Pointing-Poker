import React from 'react';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { GameCard } from '@client/components/shared/game-card/game-card';
import {
  StyleGameResultCard,
  StyleGameResultIssue,
  StyleGameResultsWrapper,
  StyleGameResultText,
} from '../game-result-styles';
import { CardResults, GameResultsRender } from '../shared/types/types';

export const GameResults: React.FC<{
  gameResultsRender: GameResultsRender[];
  scoreType: string | undefined;
}> = (props) => {
  const { gameResultsRender, scoreType } = props;

  return (
    <StyleGameResultsWrapper>
      {gameResultsRender.map((result: GameResultsRender) => (
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
      ))}
    </StyleGameResultsWrapper>
  );
};
