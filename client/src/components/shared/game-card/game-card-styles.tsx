import styled from 'styled-components';

export const CardContainer = styled.div`
  width: var(--game-card-width, 100px);
  height: var(--game-card-height, 160px);
  perspective: calc(var(--game-card-width, 100px) * 5);

  position: relative;
  user-select: none;
`;

export const StyledCard = styled.div`
  --ease-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  pointer-events: var(--pointer-events);

  transform: rotate3d(0, 1, 0, var(--game-card-flip, 0deg));
  transition: box-shadow 200ms, all 300ms, transform 500ms;
  transition-timing-function: linear, linear, ease;

  animation: var(--game-card-animation, unset);

  &:hover {
    box-shadow: 8px 8px 8px rgba(47, 16, 185, 0.25);

    & svg {
      fill-opacity: 1;
    }
  }
`;

export const StyledCardSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
  backface-visibility: hidden;

  font-size: var(--game-card-score-font-size, 50px);
`;

export const StyledFrontSide = styled(StyledCardSide)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.gameCard.fg};
  background-color: ${({ theme }) => theme.gameCard.bg};
`;

export const StyledCardScore = styled.div`
  font-size: var(--game-card-score-font-size, 50px);
`;

export const StyledBackSide = styled(StyledCardSide)`
  transform: rotateY(180deg);

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.gameCard.bg};
  background-color: ${({ theme }) => theme.gameCard.fg};
`;
