import styled from 'styled-components';
import { fontTitle } from '@client/themes/typography';

export const StyleLobbyCards = styled.div`
  margin-top: 30px;
  margin-bottom: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyleLobbyCardsText = styled.div`
  ${fontTitle};
  color: ${({ theme }) => theme.pages.lobby.title};
`;

export const StyleLobbyCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
`;
