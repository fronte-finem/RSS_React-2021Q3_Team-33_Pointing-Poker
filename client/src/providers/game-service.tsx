import React, { createContext, useContext } from 'react';
import { observable } from 'mobx';
import {
  GameState,
  GameStateActions,
  getDefaultGameState,
} from '@client/services/game-state';
import {
  GameSocketActions,
  getDefaultSocketState,
  SocketState,
} from '@client/services/game-socket';

interface IGameServiceContext {
  gameState: GameState;
  socketState: SocketState;
  gameStateActions: GameStateActions;
  gameSocketActions: GameSocketActions;
}

const GameServiceContext = createContext<IGameServiceContext | undefined>(
  undefined
);

export const GameServiceProvider: React.FC = ({ children }) => {
  const gameState = observable<GameState>(getDefaultGameState());
  const socketState = observable<SocketState>(getDefaultSocketState());
  const gameStateActions = new GameStateActions(gameState);
  const gameSocketActions = new GameSocketActions(
    socketState,
    gameStateActions
  );
  return (
    <GameServiceContext.Provider
      value={{ gameState, socketState, gameStateActions, gameSocketActions }}>
      {children}
    </GameServiceContext.Provider>
  );
};

export const useGameService = (): IGameServiceContext => {
  const context = useContext(GameServiceContext);
  if (!context) {
    throw new Error('useGameState must be inside a GameStateProvider!');
  }
  return context;
};
