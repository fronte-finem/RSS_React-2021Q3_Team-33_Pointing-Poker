import styled, { css } from 'styled-components';
import { Shadows } from '@client/themes/shadows';

const layer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

type Props = { interactive?: boolean; invisible?: boolean };

export const CardContainer = styled.div<Props>`
  --game-card-default-bg: ${({ theme }) => theme.gameCard.default.bg};
  --game-card-hover-bg: ${({ theme }) => theme.gameCard.hover.bg};
  --game-card-active-bg: ${({ theme }) => theme.gameCard.active.bg};
  --game-card-bg: var(--game-card-default-bg);

  --game-card-cover-bg: ${({ theme }) => theme.gameCard.cover.bg};

  --game-card-default-fg: ${({ theme }) => theme.gameCard.default.fg};
  --game-card-hover-fg: ${({ theme }) => theme.gameCard.hover.fg};
  --game-card-active-fg: ${({ theme }) => theme.gameCard.active.fg};
  --game-card-fg: var(--game-card-default-fg);

  --game-card-cover-fg: ${({ theme }) => theme.gameCard.cover.fg};

  --game-card-default-shadow: ${Shadows.MAIN};
  --game-card-hover-shadow: ${Shadows.HOVER};
  --game-card-shadow: var(--game-card-default-shadow);

  position: relative;
  width: var(--game-card-width, 100px);
  height: var(--game-card-height, 160px);
  perspective: calc(var(--game-card-width, 100px) * 5);

  user-select: none;
  cursor: ${({ interactive }) => (interactive ? 'pointer' : 'default')};
  //opacity: ${({ invisible }) => (invisible ? '0.5' : 'unset')};

  transition: all 200ms;

  &:hover {
    --game-card-bg: ${({ interactive }) =>
      interactive
        ? 'var(--game-card-hover-bg)'
        : 'var(--game-card-default-bg)'};
    --game-card-fg: ${({ interactive }) =>
      interactive
        ? 'var(--game-card-hover-fg)'
        : 'var(--game-card-default-fg)'};
    --game-card-shadow: ${({ interactive }) =>
      interactive
        ? 'var(--game-card-hover-shadow)'
        : 'var(--game-card-default-shadow)'};

    transform: ${({ interactive }) =>
      interactive ? 'translateY(-5px)' : 'unset'};
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

  color: var(--game-card-fg);
  background-color: var(--game-card-bg);

  transition: all 200ms;
`;

export const StyledCardScore = styled.div`
  font-size: var(--game-card-score-font-size, 50px);
`;

export const StyledBackSide = styled(StyledCardSide)`
  transform: rotateY(180deg);

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--game-card-cover-fg);
  background-color: var(--game-card-cover-bg);
`;

export const SideWrapper = styled.div`
  ${layer};
`;

type OverlayProps = { isLoading?: boolean };

export const Overlay = styled.div<OverlayProps>`
  ${layer};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isLoading }) => (isLoading ? '#fffe' : '#0848')};
  color: #fff;
  font-size: 100px;
  backdrop-filter: blur(1px);
`;
