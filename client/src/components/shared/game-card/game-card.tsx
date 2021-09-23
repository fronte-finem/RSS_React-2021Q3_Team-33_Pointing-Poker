import React from 'react';
import { CardScore, ExtraScoreKind } from '@shared/api-types/game-settings';
import { CoffeeOutlined } from '@ant-design/icons';
import { useStateService } from '@client/providers/state-service';
import {
  StyledBottomScore,
  StyledCardScore,
  StyledGameCard,
  StyledTopScore,
} from './game-card-styles';

interface Props {
  score: CardScore;
}

const getScoreType = (score: CardScore, scoreType = 'SP') => {
  if (typeof score === 'number') return scoreType;
  if (score === ExtraScoreKind.ZERO) return scoreType;
  if (score === ExtraScoreKind.ONE_HALF) return scoreType;
  return '#';
};

export const GameCard: React.FC<Props> = ({ score }) => {
  const { gameState } = useStateService();
  const cardScoreType = getScoreType(score, gameState.settings.scoreType);

  return (
    <StyledGameCard>
      <StyledCardScore>
        {score === ExtraScoreKind.COFFEE ? <CoffeeOutlined /> : score}
      </StyledCardScore>
      <StyledTopScore>{cardScoreType}</StyledTopScore>
      <StyledBottomScore>{cardScoreType}</StyledBottomScore>
    </StyledGameCard>
  );
};
