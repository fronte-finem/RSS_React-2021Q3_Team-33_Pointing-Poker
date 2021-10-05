import React, { lazy, Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory, useParams } from 'react-router-dom';
import { useStateService } from '@client/providers/state-service';
import { Spinner } from '@client/components/pages/game-router/spinner';

const PageEntry = lazy(() => import('./routes/entry'));
const PageLobby = lazy(() => import('./routes/lobby'));
const PageGame = lazy(() => import('./routes/game'));
const PageResults = lazy(() => import('./routes/results'));

export const PageGameRouter: React.FC = observer(() => {
  const { gameState } = useStateService();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  if (id) {
    gameState.setId(id);
    history.push('/');
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div>
        {gameState.isModeEntry ? <PageEntry /> : null}
        {gameState.isModeLobby ? <PageLobby /> : null}
        {gameState.isModeGame ? <PageGame /> : null}
        {gameState.isModeResults ? <PageResults /> : null}
      </div>
    </Suspense>
  );
});
