import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { UserCard } from '@client/components/shared/user-card/user-card';
import React from 'react';
import { StyledTitle } from '@client/components/styles/text';
import {
  Row,
  StatusCard,
  StyledUsers,
} from '@client/components/pages/game/users/users.styles';

export const Users = observer(function Users() {
  const { gameState } = useStateService();

  return (
    <StyledUsers>
      <Row>
        <StyledTitle level={2}>Score:</StyledTitle>
        <StyledTitle level={2}>Players:</StyledTitle>
      </Row>
      {gameState.settings.dealerGamer ? (
        <Row>
          <StatusCard>In progress</StatusCard>
          <UserCard user={gameState.getDealer()} />
        </Row>
      ) : null}
      {gameState.getGamers().map((user) => (
        <Row key={user.id}>
          <StatusCard>In progress</StatusCard>
          <UserCard user={user} />
        </Row>
      ))}
    </StyledUsers>
  );
});
