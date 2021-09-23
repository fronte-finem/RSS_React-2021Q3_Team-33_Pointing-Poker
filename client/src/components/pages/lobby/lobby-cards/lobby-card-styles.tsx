import styled from 'styled-components';

export const StyleLobbyCards = styled.div`
  margin-top: 30px;
  margin-bottom: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyleLobbyCardsText = styled.div`
  font-family: var(--font-ruda);
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: ${(props) => props.theme.fg};
`;

export const StyleLobbyCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
`;
