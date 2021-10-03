import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import React from 'react';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { calcStatsParams } from '@client/utils/issue-stats';
import { StyledTitle } from '@client/components/styles/text';
import { UserProgress } from './user-progress';
import { StyledUsers, BumperItem, Grid, List, Settings } from './users.styles';

export const Users = observer(function Users() {
  const { gameState, modalState } = useStateService();

  const Container = modalState.usersCompact ? List : Grid;
  const bumper = modalState.usersCompact ? <BumperItem /> : null;

  const scores = gameState.roundIssueId
    ? gameState.getIssueScores(gameState.roundIssueId)
    : [];
  const statsParams = calcStatsParams(scores);

  const statsParamsView =
    scores.length === 0 ? null : (
      <StyledTitle level={4}>
        Average: {statsParams.average.toFixed(1)}
        &nbsp;&nbsp;|&nbsp;&nbsp; Median: {statsParams.median.toFixed(1)}
      </StyledTitle>
    );

  return (
    <StyledUsers>
      <Settings>
        <Toggle
          unCheckedChildren="grid"
          checkedChildren="list"
          defaultChecked={modalState.usersCompact}
          onChange={(checked) => modalState.setUsersCompact(checked)}
        />
      </Settings>
      {statsParamsView}

      <Container>
        {bumper}
        {gameState.settings.dealerGamer ? (
          <UserProgress user={gameState.getDealer()} />
        ) : null}
        {gameState.getGamers().map((user) => (
          <UserProgress key={user.id} user={user} />
        ))}
        {bumper}
      </Container>
    </StyledUsers>
  );
});
