import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import React from 'react';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { UserProgress } from './user-progress';
import { StyledUsers, BumperItem, Grid, List, Settings } from './users.styles';

export const Users = observer(function Users() {
  const { gameState, modalState } = useStateService();

  const Container = modalState.usersCompact ? List : Grid;
  const bumper = modalState.usersCompact ? <BumperItem /> : null;

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
