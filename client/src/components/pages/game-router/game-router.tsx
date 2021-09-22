import React, { useEffect } from 'react';
import { Alert, message } from 'antd';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { GamePage } from '@client/services/game-state';
import { MainPage } from '@client/components/pages/main-page/main-page';
import { PageLobby } from '@client/components/pages/lobby/lobby';
import { useHistory, useParams } from 'react-router-dom';
import { ModalKick } from '@client/components/shared/modal-kick/modal-kick';
import { ModalKickInit } from '@client/components/shared/modal-kick/modal-kick-init';
import { ModalCreateIssue } from '@client/components/shared/modal-edit-issue/modal-create-issue';

export const PageGameRouter: React.FC = observer(() => {
  const { gameState, gameStateActions } = useGameService();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    if (!gameStateActions.kickResult) return;
    message.info(gameStateActions.kickResult).then(null);
  }, [gameStateActions.kickResult]);

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

      <Alert.ErrorBoundary>
        <ModalKickInit />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalKick />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalCreateIssue />
      </Alert.ErrorBoundary>
    </div>
  );
});
