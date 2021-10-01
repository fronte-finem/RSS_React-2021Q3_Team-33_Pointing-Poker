import styled from 'styled-components';

export const StyledCards = styled.div`
  --game-card-width: 130px;
  --game-card-height: 210px;
  --game-card-score-font-size: 65px;
  --game-card-score-name-font-size: 20px;
  --game-card-score-name-offset-h: 15px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Settings = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Grid = styled.ul`
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

export const List = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;

  overflow: auto;

  margin: 0;
  padding: 10px 0;
  list-style: none;

  mask: linear-gradient(to right, #fff0, #fff 5% 95%, #fff0);
`;

export const Item = styled.li`
  display: block;
`;

export const BumperItem = styled(Item)`
  flex: 0 0 calc(0.25 * var(--game-card-width));
`;
