import styled from 'styled-components';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { UserCard } from '@client/components/shared/user-card/user-card';

export const ProgressPair = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledUserCard = styled(UserCard)`
  --user-card-width: 150px;
  --user-card-height: 200px;
  --user-card-controls-position: absolute;
  --user-card-controls-padding: 5px;
  --user-card-font-size-name: 1.2em;
  --user-card-name-wrap: initial;

  && {
    grid-template-columns: 1fr;
    grid-template-rows: 0 100px 1fr;
    grid-template-areas:
      'controls'
      'avatar'
      'body';
  }
`;

export const StyledGameCard = styled(GameCard)`
  --game-card-width: 100px;
  --game-card-height: 160px;
  --game-card-score-font-size: 45px;
  --game-card-score-name-font-size: 15px;
  --game-card-score-name-offset-h: 10px;
`;
