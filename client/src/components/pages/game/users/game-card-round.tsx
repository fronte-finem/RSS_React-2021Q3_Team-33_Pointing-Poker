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
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

export const GameCardRoundResult = observer(
  ({ score, className }: GameCardProps) => {
    const { gameState } = useStateService();

    const front = isNoneScore(score) ? (
      <div>{gameState.roundIssueId ? <CloseCircleOutlined /> : ''}</div>
    ) : (
      <GameCardFront score={score} />
    );

    return (
      <GameCardBase
        invisible={isNoneScore(score)}
        className={className}
        front={front}
        back={<LogoSvg />}
      />
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
    const side = (
      <div>
        <QuestionCircleOutlined />
      </div>
    );
    return <GameCardBase className={className} front={side} back={side} />;
  }
);

export const GameCardUserDecided = observer(
  ({ className }: { className?: string }) => {
    const side = (
      <div>
        <CheckCircleOutlined />
      </div>
    );
    return <GameCardBase className={className} front={side} back={side} />;
  }
);
