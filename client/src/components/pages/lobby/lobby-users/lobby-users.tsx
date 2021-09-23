import { UserCard } from '@client/components/shared/user-card/user-card';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { StyleLobbyTitle, StyledLobbySection } from '../lobby-styles';
import { StyleLobbyUsersGrid } from './lobby-users-styles';

export const LobbyUsersSection: React.FC = observer(() => {
  const { gameState } = useStateService();

  return (
    <StyledLobbySection>
      <StyleLobbyTitle level={2}>Gamers:</StyleLobbyTitle>
      <StyleLobbyUsersGrid>
        {gameState.getGamers().map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyleLobbyUsersGrid>
      <StyleLobbyTitle level={2}>Spectators:</StyleLobbyTitle>
      <StyleLobbyUsersGrid>
        {gameState.getSpectators().map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyleLobbyUsersGrid>
    </StyledLobbySection>
  );
});
