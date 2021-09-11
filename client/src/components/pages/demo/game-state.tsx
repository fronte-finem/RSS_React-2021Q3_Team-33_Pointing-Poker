import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameState } from '@client/providers/game-state';

export const PageGameStateDemo: React.FC = observer(() => {
  const { gameState, gameStateActions } = useGameState();
  return (
    <div>
      <h2>Title: {gameState.title}</h2>
      <h4>ID: {gameState.id}</h4>
      <dl>
        <dt>User ID:</dt>
        <dd>{gameState.userId}</dd>
      </dl>
      <button
        type="button"
        onClick={() => gameStateActions.setId(`${Math.random()}`)}>
        Change ID
      </button>
    </div>
  );
});
