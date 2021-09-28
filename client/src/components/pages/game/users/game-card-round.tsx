import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  GameCardBase,
  GameCardProps,
} from '@client/components/shared/game-card/game-card';
import { isNoneScore } from '@shared/api-types/game-card-settings';
import { GameCardFront } from '@client/components/shared/game-card/game-card-front';
import { LogoSvg } from '@client/components/app/header/logo';
import { useStateService } from '@client/providers/state-service';

export const GameCardRoundResult = observer(
  ({ score, className }: GameCardProps) => {
    const { gameState } = useStateService();

    const front = isNoneScore(score) ? (
      <div>{gameState.currentIssue ? '😴' : ''}</div>
    ) : (
      <GameCardFront score={score} />
    );

    return (
      <GameCardBase className={className} front={front} back={<LogoSvg />} />
    );
  }
);

export const GameCardLogos = observer(
  ({ className }: { className?: string }) => {
    const side = (
      <GameCardBase
        front={<LogoSvg />}
        back={<LogoSvg />}
        className={className}
      />
    );
    return <GameCardBase className={className} front={side} back={side} />;
  }
);

export const GameCardUserThinking = observer(
  ({ className }: { className?: string }) => {
    const side = <div>🤔</div>;
    return <GameCardBase className={className} front={side} back={side} />;
  }
);

export const GameCardUserDecided = observer(
  ({ className }: { className?: string }) => {
    const side = <div>👌</div>;
    return <GameCardBase className={className} front={side} back={side} />;
  }
);
