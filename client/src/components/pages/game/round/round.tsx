import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { GameTimer } from '@client/components/shared/timer/timer';
import { Button } from '@client/components/shared/button/button';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { Statistics } from '../statistics/statistics';
import { Center, StyledRound } from './round.styles';

export const Round = observer(function Round() {
  const { gameState, modalState } = useStateService();

  return (
    <StyledRound>
      <Center>
        <IssueCard issue={gameState.currentIssue} />
        <Statistics issueId={gameState.currentIssue?.id} />
      </Center>
      <Center>{gameState.settings.timeout ? <GameTimer /> : null}</Center>
      <Center>
        <Button onClick={() => modalState.showIssues()}>Show issues</Button>
      </Center>
    </StyledRound>
  );
});
