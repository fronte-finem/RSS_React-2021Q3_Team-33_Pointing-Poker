import styled from 'styled-components';

export const StyledUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Settings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const Grid = styled.div`
  --cell-width: 230px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--cell-width));
  grid-auto-rows: 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-gap: 30px;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 10px 0;

  overflow: auto;

  mask: linear-gradient(to right, #fff0, #fff 5% 95%, #fff0);
`;

export const BumperItem = styled.div`
  flex: 0 0 30px;
`;
