import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  CardScore,
  ExtraScoreKind,
} from '@shared/api-types/game-card-settings';
import { CoffeeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { StyledCardScore } from './game-card-styles';
import { ScoreName } from './score-name';

const FrontContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameCardFront = observer(({ score }: { score: CardScore }) => {
  return (
    <FrontContainer>
      <StyledCardScore>
        {score === ExtraScoreKind.COFFEE ? <CoffeeOutlined /> : score}
      </StyledCardScore>
      <ScoreName score={score} top />
      <ScoreName score={score} />
    </FrontContainer>
  );
});
