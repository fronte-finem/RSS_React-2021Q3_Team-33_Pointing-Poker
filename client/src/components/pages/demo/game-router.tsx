import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { GamePage } from '@client/services/game-state';
import { PageGameEntryDemo } from '@client/components/pages/demo/game-page-entry';
import { PageGameSettingsDemo } from '@client/components/pages/demo/game-page-settings';
import { PageGameLobbyDemo } from '@client/components/pages/demo/game-page-lobby';

export const PageGameRouterDemo: React.FC = observer(() => {
  const { gameState } = useGameService();

  return (
    <div>
      {gameState.page === GamePage.ENTRY && <PageGameEntryDemo />}
      {gameState.page === GamePage.LOBBY && gameState.isDealer ? (
        <PageGameSettingsDemo />
      ) : (
        <PageGameLobbyDemo />
      )}
    </div>
  );
});
