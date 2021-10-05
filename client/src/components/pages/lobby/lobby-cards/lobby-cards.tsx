import React from 'react';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { StyledTitle } from '@client/components/styles/text';
import { StyleLobbyCards, StyleLobbyCardsWrapper } from './lobby-card-styles';

export const LobbyCardsSection = observer(() => {
  const { gameState } = useStateService();

  return (
    <StyleLobbyCards>
      <StyledTitle level={4}>Cards deck preview:</StyledTitle>
      <StyleLobbyCardsWrapper>
        {gameState.cardsDeck.map((score) => (
          <GameCard key={score} score={score} />
        ))}
      </StyleLobbyCardsWrapper>
    </StyleLobbyCards>
  );
});
