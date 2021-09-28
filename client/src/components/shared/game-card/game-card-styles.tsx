import { shadowHover, shadowMain } from '@client/themes/shadows';
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
  ${shadowMain};

  &:hover {
    ${shadowHover};
    background-color: ${({ theme }) => theme.gameCard.hover};

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
