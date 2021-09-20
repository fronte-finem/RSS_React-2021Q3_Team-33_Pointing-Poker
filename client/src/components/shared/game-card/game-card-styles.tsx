import styled from 'styled-components';

export const StyledGameCard = styled.div`
  width: 100px;
  height: 161px;
  color: ${({ theme }) => theme.gameCard.fg};
  background-color: ${({ theme }) => theme.gameCard.bg};
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: 8px 8px 8px rgba(47, 16, 185, 0.25);

    & svg {
      fill-opacity: 1;
    }
  }
`;

export const StyledCardScore = styled.div`
  font-size: 50px;
`;

export const StyledCardScoreType = styled.div`
  position: absolute;
  font-size: 16px;
`;
