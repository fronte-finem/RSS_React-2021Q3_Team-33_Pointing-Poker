import React from 'react';
import { Alert } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { MainPage } from '@client/components/pages/main-page/main-page';
import { PageLobby } from '@client/components/pages/lobby/lobby';
import { useHistory, useParams } from 'react-router-dom';
import { ModalKick } from '@client/components/shared/modal-kick/modal-kick';
import { ModalKickInit } from '@client/components/shared/modal-kick/modal-kick-init';
import { ModalIssueCreate } from '@client/components/shared/modal-issue/modal-issue-create';
import { ModalIssueEdit } from '@client/components/shared/modal-issue/modal-issue-edit';
import { ModalIssueDelete } from '@client/components/shared/modal-issue/modal-issue-delete';
import { ModalChat } from '@client/components/shared/modal-chat/modal-chat';
import { PageGame } from '@client/components/pages/game/game';

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
      {gameState.isModeResults ? <div>Page Game Results</div> : null}

      <Alert.ErrorBoundary>
        <ModalKickInit />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalKick />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalIssueCreate />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalIssueEdit />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalIssueDelete />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalChat />
      </Alert.ErrorBoundary>
    </div>
  );
});
