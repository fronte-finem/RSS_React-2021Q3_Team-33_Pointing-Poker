import React from 'react';

import {
  StyledCardScore,
  StyledCardScoreType,
  StyledGameCard,
} from './GameCardStyleds';

export const GameCard: React.FC<{ score: number; scoreType: string }> = (
  props
) => {
  const { score, scoreType } = props;
  return (
    <StyledGameCard {...props}>
      <StyledCardScore>{score}</StyledCardScore>
      <StyledCardScoreType style={{ top: '5px', left: '15px' }}>
        {scoreType}
      </StyledCardScoreType>
      <StyledCardScoreType
        style={{ bottom: '5px', right: '15px', transform: 'rotate(180deg)' }}>
        {scoreType}
      </StyledCardScoreType>
    </StyledGameCard>
  );
};
