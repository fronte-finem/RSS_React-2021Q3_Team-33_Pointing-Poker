import styled, { css } from 'styled-components';

const layer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

type Props = { interactive?: boolean; invisible?: boolean };

export const CardContainer = styled.div<Props>`
  --game-card-normal-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  --game-card-hover-shadow: 8px 8px 8px rgba(47, 16, 185, 0.25);
  --game-card-shadow: var(--game-card-normal-shadow);

  position: relative;
  width: var(--game-card-width, 100px);
  height: var(--game-card-height, 160px);
  perspective: calc(var(--game-card-width, 100px) * 5);

  user-select: none;
  cursor: ${({ interactive }) => (interactive ? 'pointer' : 'default')};
  opacity: ${({ invisible }) => (invisible ? '0.5' : 'unset')};

  &:hover {
    --game-card-shadow: ${({ interactive }) =>
      interactive
        ? 'var(--game-card-hover-shadow)'
        : 'var(--game-card-normal-shadow)'};
  }
`;

export const StyledCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  border-radius: 20px;
  box-shadow: var(--game-card-shadow);

  transform: rotate3d(0, 1, 0, var(--game-card-flip, 0deg));
  transition: all 300ms, box-shadow 200ms, transform 500ms;
  transition-timing-function: linear, linear, ease;

  animation: var(--game-card-animation, unset);
`;

export const StyledCardSide = styled.div`
  ${layer};
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

export const SideWrapper = styled.div`
  ${layer};
`;

type OverlayProps = { loading?: boolean };

export const Overlay = styled.div<OverlayProps>`
  ${layer};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ loading }) => (loading ? '#fffe' : '#0848')};
  color: #fff;
  font-size: 100px;
  backdrop-filter: blur(1px);
`;
