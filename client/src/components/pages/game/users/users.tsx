import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import React from 'react';
import { UserProgress } from './user-progress';
import { StyledUsers } from './users.styles';

export const Users = observer(function Users() {
  const { gameState } = useStateService();

  return (
    <StyledUsers>
      {gameState.settings.dealerGamer ? (
        <UserProgress user={gameState.getDealer()} />
      ) : null}
      {gameState.getGamers().map((user) => (
        <UserProgress key={user.id} user={user} />
      ))}
    </StyledUsers>
  );
});
