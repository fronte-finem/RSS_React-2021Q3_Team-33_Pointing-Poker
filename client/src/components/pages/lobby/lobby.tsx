import React from 'react';
import { LobbyInfoSection } from './lobby-info/lobby-info';
import { LobbyIssueSection } from './lobby-issue/lobby-issue';
import { LobbySettingsSection } from './lobby-settings/lobby-settings';
import { StyleLobbyPage } from './lobby-styles';
import { LobbyUsersSection } from './lobby-users/lobby-users';

export const PageLobby: React.FC = () => {
  const isDealer = true;
  return (
    <StyleLobbyPage>
      <LobbyInfoSection />
      <LobbyUsersSection />
      {isDealer ? (
        <>
          <LobbyIssueSection />
          <LobbySettingsSection />
        </>
      ) : (
        ''
      )}
    </StyleLobbyPage>
  );
};
