import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';

export const PageGameSettingsDemo: React.FC = observer(() => {
  const { gameState, socketState } = useGameService();

  return (
    <div style={{ backgroundColor: '#f808' }}>
      <h1>Settings</h1>
      <h3>Game Title: {gameState.title}</h3>
      <h4>Game ID: {gameState.id}</h4>
      {socketState.isLoading && <div>Loading...</div>}
      {socketState.isFail && <div>{socketState.failMessage}</div>}
      <pre>{JSON.stringify(gameState, null, 2)}</pre>
    </div>
  );
});
