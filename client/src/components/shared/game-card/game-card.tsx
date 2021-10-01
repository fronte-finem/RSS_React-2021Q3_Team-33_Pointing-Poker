import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { CardScore, isNoneScore } from '@shared/api-types/game-card-settings';
import { LogoSvg } from '@client/components/app/header/logo';
import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { useStateService } from '@client/providers/state-service';
import { Spin } from 'antd';
import { GameCardFront } from './game-card-front';
import {
  CardContainer,
  Overlay,
  SideWrapper,
  StyledBackSide,
  StyledCard,
  StyledFrontSide,
} from './game-card-styles';

export interface GameCardBaseProps {
  front?: JSX.Element | null;
  back?: JSX.Element | null;
  invisible?: boolean;
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
}

export const GameCardBase = observer(
  ({
    front,
    back,
    invisible,
    interactive,
    className,
    onClick,
  }: GameCardBaseProps) => {
    return (
      <CardContainer
        className={className}
        invisible={invisible}
        interactive={interactive}
        onClick={onClick}>
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
      invisible={isNoneScore(score)}
      className={className}
      front={<GameCardFront score={score} />}
      back={<LogoSvg />}
    />
  );
});

export interface ActiveGameCardProps {
  score: CardScore;
  selected?: boolean;
  className?: string;
}

export const ActiveGameCard = observer(
  ({ score, className }: ActiveGameCardProps) => {
    const { modalState, socketState } = useStateService();
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
      setIsLoading(true);
      console.log(score);
      await socketState.addScore(score);
      setIsLoading(false);
    };

    const loading = isLoading ? (
      <Overlay loading>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />} />
      </Overlay>
    ) : null;

    const active =
      modalState.activeScore === score ? (
        <Overlay>
          <CheckCircleOutlined />
        </Overlay>
      ) : null;

    const front = (
      <SideWrapper>
        <GameCardFront score={score} />
        {loading || active}
      </SideWrapper>
    );

    return (
      <GameCardBase
        interactive
        className={className}
        front={front}
        back={<LogoSvg />}
        onClick={onClick}
      />
    );
  }
);
