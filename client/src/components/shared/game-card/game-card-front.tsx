import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  CardScore,
  ExtraScoreKind,
} from '@shared/api-types/game-card-settings';
import { CoffeeOutlined } from '@ant-design/icons';
import { StyledCardScore } from './game-card-styles';
import { ScoreName } from './score-name';

export const GameCardFront = observer(({ score }: { score: CardScore }) => {
  return (
    <>
      <StyledCardScore>
        {score === ExtraScoreKind.COFFEE ? <CoffeeOutlined /> : score}
      </StyledCardScore>
      <ScoreName score={score} top />
      <ScoreName score={score} />
    </>
  );
});
