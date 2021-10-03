import React, { createContext, useContext } from 'react';
import { GameState } from '@client/services/game-state';
import { SocketState } from '@client/services/socket-state';
import { ModalState } from '@client/services/modal-state';
import { ThemeState } from '@client/services/theme-state';

interface IStateServiceContext {
  themeState: ThemeState;
  modalState: ModalState;
  gameState: GameState;
  socketState: SocketState;
}

const StateServiceContext = createContext<IStateServiceContext | undefined>(
  undefined
);

export const StateServiceProvider: React.FC = ({ children }) => {
  const themeState = new ThemeState();
  const modalState = new ModalState();
  const gameState = new GameState(modalState);
  const socketState = new SocketState(modalState, gameState);

  return (
    <StateServiceContext.Provider
      value={{
        themeState,
        modalState,
        gameState,
        socketState,
      }}>
      {children}
    </StateServiceContext.Provider>
  );
};

export const useStateService = (): IStateServiceContext => {
  const context = useContext(StateServiceContext);
  if (!context) {
    throw new Error('useGameState must be inside a GameStateProvider!');
  }
  return context;
};
