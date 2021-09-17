import { useGameService } from '@client/providers/game-service';
import React from 'react';
import { LobbyCardsSection } from './lobby-cards/lobby-cards';
import { LobbyInfoSection } from './lobby-info/lobby-info';
import { LobbyIssueSection } from './lobby-issue/lobby-issue';
import { LobbySettingsSection } from './lobby-settings/lobby-settings';
import { StyleLobbyPage } from './lobby-styles';
import { LobbyUsersSection } from './lobby-users/lobby-users';

export const PageLobby: React.FC = () => {
  const { gameState } = useGameService();
  const thisUser = gameState.users.find(
    (user) => user.id === gameState.selfUserId
  );
  const isDealer = thisUser?.role === 'dealer';

  return (
    <StyleLobbyPage>
      <LobbyInfoSection />
      <LobbyUsersSection />
      {isDealer ? (
        <>
          <LobbyIssueSection />
          <LobbySettingsSection />
          <LobbyCardsSection />
        </>
      ) : (
        ''
      )}
    </StyleLobbyPage>
  );
};
