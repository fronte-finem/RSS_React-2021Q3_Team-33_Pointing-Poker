import React from 'react';
import { observer } from 'mobx-react-lite';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { Button } from '@client/components/shared/button/button';
import { useStateService } from '@client/providers/state-service';
import { InfoControl, StyleLobbyControl } from './lobby-info-styles';

export const LobbyInfoControl = observer(() => {
  const { gameState, socketState, modalState } = useStateService();

  const startGame = () => {
    if (gameState.issues.length === 0) {
      modalState.initSystemMessage(ApiFailMessage.GAME_NEED_ISSUES);
      return;
    }
    if (gameState.cardsDeck.length === 0) {
      modalState.initSystemMessage(ApiFailMessage.CARDS_DECK_NEED_CARDS);
      return;
    }
    if (!gameState.settings.cardsScoreType?.trim()) {
      modalState.initSystemMessage(ApiFailMessage.SCORE_TYPE_EMPTY);
      return;
    }
    socketState.startGame().then(null);
  };

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
