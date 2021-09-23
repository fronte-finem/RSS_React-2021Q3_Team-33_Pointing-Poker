import React from 'react';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { AddingGameCard } from '@client/components/shared/game-card/adding-game-card';
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
      <StyleLobbyCardsText>Add card values:</StyleLobbyCardsText>
      <StyleLobbyCardsWrapper>
        {gameState.settings.cardsSet.map((score) => (
          <GameCard key={score} score={score} />
        ))}
        <AddingGameCard />
      </StyleLobbyCardsWrapper>
    </StyleLobbyCards>
  );
});
