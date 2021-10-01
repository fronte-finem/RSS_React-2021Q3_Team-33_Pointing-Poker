import React from 'react';
import { observer } from 'mobx-react-lite';
import { LogoSvg } from '@client/components/app/header/logo';
import { GameCardBase, GameCardProps } from './game-card';
import { StyledFrontSide } from './game-card-styles';

const AddingFrontSide = () => {
  return (
    <StyledFrontSide>
      <svg
        className="svg"
        style={{ transition: 'all .2s' }}
        width="80"
        height="80"
        viewBox="0 0 313 313"
        fill="#000000"
        fillOpacity="0.63"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M171.875 78.125H140.625V140.625H78.125V171.875H140.625V234.375H171.875V171.875H234.375V140.625H171.875V78.125ZM156.25 0C70 0 0 70 0 156.25C0 242.5 70 312.5 156.25 312.5C242.5 312.5 312.5 242.5 312.5 156.25C312.5 70 242.5 0 156.25 0ZM156.25 281.25C87.3438 281.25 31.25 225.156 31.25 156.25C31.25 87.3438 87.3438 31.25 156.25 31.25C225.156 31.25 281.25 87.3438 281.25 156.25C281.25 225.156 225.156 281.25 156.25 281.25Z" />
      </svg>
    </StyledFrontSide>
  );
};

export const AddingGameCard = observer(({ className }: GameCardProps) => {
  return (
    <GameCardBase
      invisible={false}
      className={className}
      front={<AddingFrontSide />}
      back={<LogoSvg />}
    />
  );
});
