import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { LobbyCardsSection } from './lobby-cards/lobby-cards';
import { LobbyInfoSection } from './lobby-info/lobby-info';
import { LobbyIssueSection } from './lobby-issue/lobby-issue';
import { LobbySettingsSection } from './lobby-settings/lobby-settings';
import { StyleLobbyPage } from './lobby-styles';
import { LobbyUsersSection } from './lobby-users/lobby-users';

export const PageLobby: React.FC = observer(() => {
  const { gameState } = useGameService();
  const stateGameSettings = useState(gameState.settings);

  return (
    <StyleLobbyPage>
      <LobbyInfoSection gameSettings={stateGameSettings[0]} />
      <LobbyUsersSection />
      {gameState.isDealer ? (
        <>
          <LobbyIssueSection />
          <LobbySettingsSection state={stateGameSettings} />
          <LobbyCardsSection gameSettings={stateGameSettings[0]} />
        </>
      ) : null}
    </StyleLobbyPage>
  );
});
