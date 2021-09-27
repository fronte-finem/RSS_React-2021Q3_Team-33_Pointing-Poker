import React from 'react';
import { CoffeeOutlined } from '@ant-design/icons';
import {
  CardScore,
  ExtraScoreKind,
} from '@shared/api-types/game-card-settings';
import { observer } from 'mobx-react-lite';
import { LogoSvg } from '@client/components/app/header/logo';
import styled from 'styled-components';
import {
  CardContainer,
  StyledBackSide,
  StyledCard,
  StyledCardScore,
  StyledFrontSide,
} from './game-card-styles';
import { ScoreName } from './score-name';

export interface Props {
  score: CardScore;
  className?: string;
}

const BackLogo = styled(LogoSvg)``;

export const GameCard = observer(({ score, className }: Props) => {
  return (
    <CardContainer className={className}>
      <StyledCard>
        <StyledFrontSide>
          <StyledCardScore>
            {score === ExtraScoreKind.COFFEE ? <CoffeeOutlined /> : score}
          </StyledCardScore>
          <ScoreName score={score} top />
          <ScoreName score={score} />
        </StyledFrontSide>
        <StyledBackSide>
          <BackLogo />
        </StyledBackSide>
      </StyledCard>
    </CardContainer>
  );
});
