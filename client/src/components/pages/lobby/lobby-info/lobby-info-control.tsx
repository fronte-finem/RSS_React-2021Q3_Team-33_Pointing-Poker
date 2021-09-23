import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '@client/components/shared/button/button';
import { useStateService } from '@client/providers/state-service';
import { InfoControl, StyleLobbyControl } from './lobby-info-styles';

export const LobbyInfoControl = observer(() => {
  const { gameState, socketState } = useStateService();

  const startGame = () => socketState.startGame();

  const exitLobby = async () => {
    console.log('exit lobby');
    gameState.isDealer ? socketState.cancelGame() : socketState.disconnect();
  };

  return gameState.isDealer ? (
    <InfoControl>
      <Button type="primary" onClick={startGame}>
        Start game
      </Button>
      <Button type="default" onClick={exitLobby}>
        Cancel game
      </Button>
    </InfoControl>
  ) : (
    <StyleLobbyControl>
      <Button type="default" onClick={exitLobby}>
        Exit
      </Button>
    </StyleLobbyControl>
  );
});
