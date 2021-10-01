import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { StyleGameResultsWrapper } from '../game-result-styles';
import { IssueStatsView } from './issue-stats';

export const GameResults = observer(() => {
  const { gameState } = useStateService();

  return (
    <StyleGameResultsWrapper>
      {gameState.getStatistics().map((issueStats) => (
        <IssueStatsView issueStats={issueStats} />
      ))}
    </StyleGameResultsWrapper>
  );
});
