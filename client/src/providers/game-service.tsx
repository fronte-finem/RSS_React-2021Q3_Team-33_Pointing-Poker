import React, { createContext, useContext } from 'react';
import { observable } from 'mobx';
import { GameState, getDefaultGameState } from '@client/services/game-state';
import {
  getDefaultSocketState,
  SocketState,
} from '@client/services/game-socket';
import { GameStateActions } from '@client/services/game-state-actions';
import { GameSocketActions } from '@client/services/game-socket-actions';
import { ModalState } from '@client/services/modal-state';

interface IGameServiceContext {
  gameState: GameState;
  socketState: SocketState;
  gameStateActions: GameStateActions;
  gameSocketActions: GameSocketActions;
  modalState: ModalState;
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
  const modalState = new ModalState();

  return (
    <GameServiceContext.Provider
      value={{
        gameState,
        socketState,
        gameStateActions,
        gameSocketActions,
        modalState,
      }}>
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
