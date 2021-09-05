import React from 'react';

import styled from 'styled-components';

const StyledGameCard = styled.div`
  width: 130px;
  height: 210px;
  background-color: ${(props) => props.theme.bg};
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.componentColor};
`;

const StyledCardScore = styled.p`
  font-size: 70px;
  margin: 0;
`;
const StyledCardScoreType = styled.p`
  position: absolute;
  font-size: 20px;
  margin: 0;
`;

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
