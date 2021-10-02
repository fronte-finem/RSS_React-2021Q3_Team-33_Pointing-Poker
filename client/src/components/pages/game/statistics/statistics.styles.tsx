import styled from 'styled-components';

export const StyledStats = styled.div`
  --game-card-width: 80px;
  --game-card-height: 130px;
  --game-card-score-font-size: 35px;
  --game-card-score-name-font-size: 14px;
  --game-card-score-name-offset-h: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
