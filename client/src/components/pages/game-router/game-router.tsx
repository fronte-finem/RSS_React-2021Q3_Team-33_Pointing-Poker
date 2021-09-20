import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { GamePage } from '@client/services/game-state';
import { MainPage } from '@client/components/pages/main-page/main-page';
import { PageLobby } from '@client/components/pages/lobby/lobby';
import { useHistory, useParams } from 'react-router-dom';

export const PageGameRouter: React.FC = observer(() => {
  const { gameState, gameStateActions } = useGameService();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  if (id) {
    gameStateActions.setId(id);
    history.push('/');
  }

  return (
    <div>
      {gameState.page === GamePage.ENTRY && <MainPage />}
      {gameState.page === GamePage.LOBBY && <PageLobby />}
      {gameState.page === GamePage.GAME && <div>Page Game</div>}
      {gameState.page === GamePage.RESULTS && <div>Page Game Results</div>}
    </div>
  );
});
