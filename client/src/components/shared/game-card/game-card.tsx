import React from 'react';
import { CoffeeOutlined } from '@ant-design/icons';
import {
  CardScore,
  ExtraScoreKind,
} from '@shared/api-types/game-card-settings';
import { observer } from 'mobx-react-lite';
import { StyledCardScore, StyledGameCard } from './game-card-styles';
import { ScoreName } from './score-name';

export interface Props {
  score: CardScore;
}

export const GameCard = observer(({ score }: Props) => {
  return (
    <StyledGameCard>
      <StyledCardScore>
        {score === ExtraScoreKind.COFFEE ? <CoffeeOutlined /> : score}
      </StyledCardScore>
      <ScoreName score={score} top />
      <ScoreName score={score} />
    </StyledGameCard>
  );
});
