import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { LobbyCardsSection } from './lobby-cards/lobby-cards';
import { LobbyInfoSection } from './lobby-info/lobby-info';
import { LobbyIssueSection } from './lobby-issue/lobby-issue';
import { LobbySettingsSection } from './lobby-settings/lobby-settings';
import { StyleLobbyPage } from './lobby-styles';
import { LobbyUsersSection } from './lobby-users/lobby-users';

export const PageLobby: React.FC = observer(() => {
  const { gameState } = useStateService();

  const getDealerSection = () => (
    <>
      <LobbyIssueSection />
      <LobbySettingsSection />
      <LobbyCardsSection />
    </>
  );

  return (
    <StyleLobbyPage>
      <LobbyInfoSection />
      <LobbyUsersSection />
      {gameState.isDealer ? getDealerSection() : null}
    </StyleLobbyPage>
  );
});
