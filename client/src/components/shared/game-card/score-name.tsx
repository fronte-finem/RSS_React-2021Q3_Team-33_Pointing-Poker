import {
  CardScore,
  ExtraScoreKind,
} from '@shared/api-types/game-card-settings';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import React from 'react';
import { abbreviation } from '@shared/utils/string';
import { StyledScoreName } from '@client/components/shared/game-card/score-name.styles';
import { Tooltip } from 'antd';

const NONE = '#';

export const getScoreType = (score: CardScore, scoreType = 'SP') => {
  const scoreAbbr = abbreviation(scoreType);
  if (typeof score === 'number') return scoreAbbr;
  if (score === ExtraScoreKind.ZERO) return scoreAbbr;
  if (score === ExtraScoreKind.ONE_HALF) return scoreAbbr;
  return NONE;
};

export interface Props {
  score: CardScore;
  top?: boolean;
}

export const ScoreName = observer(({ score, top = false }: Props) => {
  const { gameState } = useStateService();
  const cardScoreType = getScoreType(score, gameState.settings.cardsScoreType);

  return (
    <Tooltip
      title={cardScoreType === NONE ? score : gameState.settings.cardsScoreType}
      placement={top ? 'topLeft' : 'bottomRight'}>
      <StyledScoreName top={top}>{cardScoreType}</StyledScoreName>
    </Tooltip>
  );
});
