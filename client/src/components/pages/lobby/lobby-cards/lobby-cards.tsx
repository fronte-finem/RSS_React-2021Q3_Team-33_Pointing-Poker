import React from 'react';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import {
  StyleLobbyCards,
  StyleLobbyCardsText,
  StyleLobbyCardsWrapper,
} from './lobby-card-styles';

export const LobbyCardsSection = observer(() => {
  const { gameState } = useStateService();

  return (
    <StyleLobbyCards>
      <StyleLobbyCardsText>Cards deck preview:</StyleLobbyCardsText>
      <StyleLobbyCardsWrapper>
        {gameState.settings.cardsDeckExtras.map((score) => (
          <GameCard key={score} score={score} />
        ))}
        {gameState.settings.cardsDeck.map((score) => (
          <GameCard key={score} score={score} />
        ))}
      </StyleLobbyCardsWrapper>
    </StyleLobbyCards>
  );
});
