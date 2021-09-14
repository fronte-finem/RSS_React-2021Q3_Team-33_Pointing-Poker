import React from 'react';
import { LobbyInfoSection } from './lobby-info/lobby-info';
import { LobbyIssueSection } from './lobby-issue/lobby-issue';
import { StyleLobbyPage } from './lobby-styles';
import { LobbyUsersSection } from './lobby-users/lobby-users';

export const PageLobby: React.FC = () => {
  return (
    <StyleLobbyPage>
      <LobbyInfoSection />
      <LobbyUsersSection />
      <LobbyIssueSection />
    </StyleLobbyPage>
  );
};
