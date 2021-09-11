import React, { createContext, useContext } from 'react';
import { observable } from 'mobx';
import { getDefaultGameSettings } from '@shared/api-types/game-settings';
import { GameState, GameStateActions } from '@client/services/game-state';

interface IGameContext {
  gameState: GameState;
  gameStateActions: GameStateActions;
}

const GameContext = createContext<IGameContext | undefined>(undefined);

export const GameStateProvider: React.FC = ({ children }) => {
  const gameState = observable<GameState>({
    id: '',
    title: '',
    userId: '',
    users: [],
    messages: [],
    issues: [],
    settings: getDefaultGameSettings(),
    results: [],
  });
  const gameStateActions = new GameStateActions(gameState);
  return (
    <GameContext.Provider value={{ gameState, gameStateActions }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameState = (): IGameContext => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameState must be inside a GameStateProvider!');
  }
  return context;
};
