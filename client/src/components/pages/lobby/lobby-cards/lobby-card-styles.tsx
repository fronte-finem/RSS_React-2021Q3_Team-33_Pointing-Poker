import { CoffeeOutlined } from '@ant-design/icons';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { fontTitle } from '@client/themes/typography';
import { Row } from 'antd';
import styled from 'styled-components';

export const StyleLobbyCards = styled.div`
  margin-top: 30px;
  margin-bottom: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyleLobbyCardsText = styled.p`
  margin: 0;
  padding: 0;
  ${fontTitle};
  color: ${({ theme }) => theme.pages.lobby.title};
`;

export const StyleLobbyCardsWrapper = styled(Row)`
  margin-top: 30px;
  width: 100%;
`;

export const StyleLobbyCard = styled(GameCard)`
  margin-right: 10px;
`;

export const StyleLobbyCardsIcon = styled(CoffeeOutlined)``;
