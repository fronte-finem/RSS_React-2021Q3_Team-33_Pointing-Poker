import styled, { css, keyframes } from 'styled-components';
import { UserCard } from '@client/components/shared/user-card/user-card';
import {
  GameCardUserThinking,
  GameCardRoundResult,
  GameCardUserDecided,
  GameCardLogos,
} from '@client/components/pages/game/users/game-card-round';

export const ProgressPair = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledUserCard = styled(UserCard)`
  --user-card-width: 120px;
  --user-card-height: 180px;
  --user-card-controls-position: absolute;
  --user-card-controls-padding: 5px;
  --user-card-font-size-name: 1.2em;
  --user-card-name-wrap: initial;
  --user-card-avatar-align-v: flex-end;

  && {
    grid-template-columns: 1fr;
    grid-template-rows: 0 100px 1fr;
    grid-template-areas:
      'controls'
      'avatar'
      'body';
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate3d(0, 1, 0, 0turn);
  }
  100% {
    transform: rotate3d(0, 1, 0, 1turn);
  }
`;

const customGameCard = css`
  --game-card-width: 100px;
  --game-card-height: 160px;
  --game-card-score-font-size: 45px;
  --game-card-score-name-font-size: 15px;
  --game-card-score-name-offset-h: 10px;
`;

export const StyledGameCardRoundResult = styled(GameCardRoundResult)`
  ${customGameCard};
`;

export const StyledGameCardUserDecided = styled(GameCardUserDecided)`
  ${customGameCard};
  //--game-card-flip: 180deg;
`;

export const StyledGameCardUserThinking = styled(GameCardUserThinking)`
  ${customGameCard};
  --delay: ${() => `${Math.random().toFixed(3)}s`};
  --game-card-animation: 1s ${rotate} var(--delay) infinite linear;
`;

export const StyledGameCardLogos = styled(GameCardLogos)`
  ${customGameCard};
  --delay: ${() => `${Math.random().toFixed(3)}s`};
  --game-card-animation: 1s ${rotate} var(--delay) infinite linear;
`;
