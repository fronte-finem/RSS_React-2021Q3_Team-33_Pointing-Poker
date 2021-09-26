import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { Item, List, StyledCards } from './cards.styles';

export const Cards = observer(function Cards() {
  const { gameState } = useStateService();

  return (
    <StyledCards>
      <List>
        {gameState.settings.cardsDeck.map((score) => (
          <Item key={score}>
            <GameCard score={score} />
          </Item>
        ))}
      </List>
    </StyledCards>
  );
});
