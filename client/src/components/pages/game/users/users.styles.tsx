import styled from 'styled-components';

export const StyledUsers = styled.div`
  --cell-width: 260px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--cell-width));
  grid-auto-rows: 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-gap: 20px;
`;
