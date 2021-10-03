import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { GameTimer } from '@client/components/shared/timer/timer';
import { Button } from '@client/components/shared/button/button';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { StyledTitle } from '@client/components/styles/text';
import { Statistics } from '../statistics/statistics';
import { Center, StyledRound } from './round.styles';

export const Round = observer(function Round() {
  const { gameState, modalState } = useStateService();

  const isAllRated = gameState.isAllIssuesRated ? 'All issues is rated' : null;

  const title = (
    <StyledTitle level={4}>
      {gameState.issues.length === 0
        ? 'No issues is added - add some for game'
        : isAllRated}
    </StyledTitle>
  );

  return (
    <StyledRound>
      <Center>
        {title}
        <IssueCard
          issue={gameState.getRoundIssue()}
          controls={gameState.isDealer}
        />
        <Statistics issueId={gameState.roundIssueId} />
      </Center>
      <Center>{gameState.settings.timeout ? <GameTimer /> : null}</Center>
      <Center>
        <Button onClick={() => modalState.showIssues()}>
          {gameState.isDealer ? 'Manage issues' : 'Show issues'}
        </Button>
      </Center>
    </StyledRound>
  );
});
