import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { ActiveGameCard } from '@client/components/shared/game-card/game-card';
import { Toggle } from '@client/components/shared/toggle/toggle';
import {
  BumperItem,
  Item,
  Grid,
  List,
  StyledCards,
  Settings,
} from './cards.styles';

export const Cards = observer(function Cards() {
  const { gameState, modalState } = useStateService();

  if (!gameState.roundIssueId) return null;

  const Container = modalState.cardsCompact ? List : Grid;
  const bumper = modalState.cardsCompact ? <BumperItem /> : null;

  return (
    <StyledCards>
      <Settings>
        <Toggle
          unCheckedChildren="grid"
          checkedChildren="list"
          defaultChecked={modalState.cardsCompact}
          onChange={(checked) => modalState.setCardsCompact(checked)}
        />
      </Settings>

      <Container>
        {bumper}
        {gameState.cardsDeck.map((score) => (
          <Item key={score}>
            <ActiveGameCard score={score} />
          </Item>
        ))}
        {bumper}
      </Container>
    </StyledCards>
  );
});
