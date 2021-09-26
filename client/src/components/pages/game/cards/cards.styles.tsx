import styled from 'styled-components';

export const StyledCards = styled.div`
  --game-card-width: 130px;
  --game-card-height: 210px;
  --game-card-score-font-size: 65px;
  --game-card-score-name-font-size: 20px;
  --game-card-score-name-offset-h: 15px;
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--game-card-width));
  grid-auto-rows: 1fr;
  justify-content: center;
  justify-items: center;
  gap: 20px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: block;
`;
