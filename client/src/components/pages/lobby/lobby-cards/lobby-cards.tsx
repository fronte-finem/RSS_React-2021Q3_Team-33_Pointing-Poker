import { CoffeeOutlined } from '@ant-design/icons';
import { AddingGameCard } from '@client/components/shared/game-card/adding-game-card';
import React from 'react';
import { CardsSetDefault, GameSettings } from '@shared/api-types/game-settings';
import { getFibonacciSequence, getPow2Sequence } from '@shared/utils/array';
import {
  StyleLobbyCard,
  StyleLobbyCards,
  StyleLobbyCardsText,
  StyleLobbyCardsWrapper,
} from './lobby-card-styles';

const MAX_CARDS = 10;
const FIBONACCI = getFibonacciSequence(MAX_CARDS + 2).slice(2);
const POW_2 = getPow2Sequence(MAX_CARDS);

interface Props {
  gameSettings: GameSettings;
}

export const LobbyCardsSection: React.FC<Props> = ({ gameSettings }) => {
  let scores: number[];

  switch (gameSettings.cardsSet) {
    case CardsSetDefault.FIBONACCI:
      scores = FIBONACCI;
      break;
    case CardsSetDefault.POW_2:
      scores = POW_2;
      break;
    default:
      scores = [1, 2, 3, 4, 5];
  }

  return (
    <StyleLobbyCards>
      <StyleLobbyCardsText>Add card values:</StyleLobbyCardsText>
      <StyleLobbyCardsWrapper gutter={[10, 10]}>
        <StyleLobbyCard
          score={<CoffeeOutlined />}
          scoreType={gameSettings.scoreType || 'SP'}
        />
        {scores.map((score) => (
          <StyleLobbyCard
            key={score}
            score={score}
            scoreType={gameSettings.scoreType || 'SP'}
          />
        ))}
        <AddingGameCard />
      </StyleLobbyCardsWrapper>
    </StyleLobbyCards>
  );
};
