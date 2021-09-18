import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { GamePage } from '@client/services/game-state';
import { PageGameEntryDemo } from '@client/components/pages/demo/game-page-entry';
import { PageLobby } from '@client/components/pages/lobby/lobby';

export const PageGameRouter: React.FC = observer(() => {
  const { gameState } = useGameService();

  return (
    <div>
      {gameState.page === GamePage.ENTRY && <PageGameEntryDemo />}
      {gameState.page === GamePage.LOBBY && <PageLobby />}
      {gameState.page === GamePage.GAME && <div>Page Game</div>}
      {gameState.page === GamePage.RESULTS && <div>Page Game Results</div>}
    </div>
  );
});
