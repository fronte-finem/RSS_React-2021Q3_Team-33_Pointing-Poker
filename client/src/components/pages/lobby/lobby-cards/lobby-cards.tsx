import { CoffeeOutlined } from '@ant-design/icons';
import { AddingGameCard } from '@client/components/shared/game-card/adding-game-card';
import React from 'react';
import {
  StyleLobbyCard,
  StyleLobbyCards,
  StyleLobbyCardsText,
  StyleLobbyCardsWrapper,
} from './lobby-card-styles';

export const LobbyCardsSection: React.FC = () => {
  const scoreType = 'SP';
  return (
    <StyleLobbyCards>
      <StyleLobbyCardsText>Add card values:</StyleLobbyCardsText>
      <StyleLobbyCardsWrapper>
        <StyleLobbyCard score={<CoffeeOutlined />} scoreType={scoreType} />
        <StyleLobbyCard score={1} scoreType={scoreType} />
        <AddingGameCard />
      </StyleLobbyCardsWrapper>
    </StyleLobbyCards>
  );
};
