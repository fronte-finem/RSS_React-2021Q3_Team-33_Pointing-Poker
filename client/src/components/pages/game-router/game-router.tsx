import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { MainPage } from '@client/components/pages/main-page/main-page';
import { PageLobby } from '@client/components/pages/lobby/lobby';
import { useHistory, useParams } from 'react-router-dom';
import { PageGame } from '@client/components/pages/game/game';
import { GameResultsPage } from '@client/components/pages/game-result/game-results-page';

export const PageGameRouter: React.FC = observer(() => {
  const { gameState } = useStateService();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  if (id) {
    gameState.setId(id);
    history.push('/');
  }

  return (
    <div>
      {gameState.isModeEntry ? <MainPage /> : null}
      {gameState.isModeLobby ? <PageLobby /> : null}
      {gameState.isModeGame ? <PageGame /> : null}
      {gameState.isModeResults ? <GameResultsPage /> : null}
    </div>
  );
});
