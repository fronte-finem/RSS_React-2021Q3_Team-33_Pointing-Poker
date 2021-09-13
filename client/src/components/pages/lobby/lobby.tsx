import React from 'react';
import { LobbyInfoSection } from './lobby-info/lobby-info';
import { StyleLobbyPage } from './lobby-styles';

export const PageLobby: React.FC = () => {
  return (
    <StyleLobbyPage>
      <LobbyInfoSection />
    </StyleLobbyPage>
  );
};
