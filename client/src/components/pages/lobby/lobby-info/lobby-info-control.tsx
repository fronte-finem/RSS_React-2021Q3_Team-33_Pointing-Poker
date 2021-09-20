import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '@client/components/shared/button/button';
import { useGameService } from '@client/providers/game-service';
import { GameSettings } from '@shared/api-types/game-settings';
import { InfoControl, StyleLobbyControl } from './lobby-info-styles';

interface Props {
  gameSettings: GameSettings;
}

export const LobbyInfoControl: React.FC<Props> = observer(
  ({ gameSettings }) => {
    const { gameState, gameSocketActions } = useGameService();

    const startGame = useCallback(() => {
      console.log('start game\n', JSON.stringify(gameSettings, null, 2));
      gameSocketActions.startGame(gameSettings).then(null);
    }, [gameSettings]);

    const exitLobby = async () => {
      console.log('exit lobby');
      gameState.isDealer
        ? gameSocketActions.cancelGame()
        : gameSocketActions.disconnect();
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
  }
);
