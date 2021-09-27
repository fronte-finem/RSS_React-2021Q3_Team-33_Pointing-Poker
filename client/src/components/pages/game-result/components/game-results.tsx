import React from 'react';

import { StyleGameResultsWrapper } from '../game-result-styles';
import { GameResultsRender } from '../shared/types/types';
import { IssueStats } from './issue-stats';

export const GameResults: React.FC<{
  gameResultsRender: GameResultsRender[];
  scoreType: string | undefined;
}> = (props) => {
  const { gameResultsRender, scoreType } = props;

  return (
    <StyleGameResultsWrapper>
      {gameResultsRender.map((result: GameResultsRender) => (
        <IssueStats result={result} scoreType={scoreType} />
      ))}
    </StyleGameResultsWrapper>
  );
};
