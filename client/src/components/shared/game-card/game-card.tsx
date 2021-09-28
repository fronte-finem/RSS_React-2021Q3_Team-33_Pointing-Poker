import React from 'react';
import { observer } from 'mobx-react-lite';
import { CardScore } from '@shared/api-types/game-card-settings';
import { LogoSvg } from '@client/components/app/header/logo';
import { GameCardFront } from './game-card-front';
import {
  CardContainer,
  StyledBackSide,
  StyledCard,
  StyledFrontSide,
} from './game-card-styles';

export interface GameCardBaseProps {
  front?: JSX.Element | null;
  back?: JSX.Element | null;
  className?: string;
}

export const GameCardBase = observer(
  ({ front, back, className }: GameCardBaseProps) => {
    return (
      <CardContainer className={className}>
        <StyledCard>
          <StyledFrontSide>{front}</StyledFrontSide>
          <StyledBackSide>{back}</StyledBackSide>
        </StyledCard>
      </CardContainer>
    );
  }
);

export interface GameCardProps {
  score: CardScore;
  className?: string;
}

export const GameCard = observer(({ score, className }: GameCardProps) => {
  return (
    <GameCardBase
      className={className}
      front={<GameCardFront score={score} />}
      back={<LogoSvg />}
    />
  );
});
