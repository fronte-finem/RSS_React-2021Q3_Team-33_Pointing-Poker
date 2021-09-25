import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { UsersSection } from '@client/components/pages/lobby/lobby-users/users-section';
import { StyledLobbySection } from '../lobby-styles';

export const LobbyUsersSection = observer(() => {
  const { gameState } = useStateService();
  return (
    <StyledLobbySection>
      <UsersSection title="Gamers" users={gameState.getGamers()} />
      <UsersSection title="Spectators" users={gameState.getSpectators()} />
    </StyledLobbySection>
  );
});
