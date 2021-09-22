import { UserCard } from '@client/components/shared/user-card/user-card';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { StyleLobbyTitle, StyledLobbySection } from '../lobby-styles';
import { StyleLobbyUsersGrid } from './lobby-users-styles';

export const LobbyUsersSection: React.FC = observer(() => {
  const { gameStateActions } = useGameService();

  return (
    <StyledLobbySection>
      <StyleLobbyTitle level={2}>Members:</StyleLobbyTitle>
      <StyleLobbyUsersGrid>
        {gameStateActions.getUsers(false).map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyleLobbyUsersGrid>
    </StyledLobbySection>
  );
});
