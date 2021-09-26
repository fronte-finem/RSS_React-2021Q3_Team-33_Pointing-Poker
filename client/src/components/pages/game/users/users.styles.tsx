import styled from 'styled-components';

export const StyledUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 10px;
`;

export const StatusCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: var(--bg);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
