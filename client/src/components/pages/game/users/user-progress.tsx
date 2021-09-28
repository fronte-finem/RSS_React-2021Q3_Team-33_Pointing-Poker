import { UserFE } from '@client/services/game-state';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStateService } from '@client/providers/state-service';
import {
  StyledGameCardUserThinking,
  StyledGameCardUserDecided,
  ProgressPair,
  StyledGameCardRoundResult,
  StyledUserCard,
} from './user-progress.styles';

interface Props {
  user?: UserFE;
}

export const UserProgress = observer(function UserProgress({ user }: Props) {
  const { gameState } = useStateService();

  if (!user) return null;

  const isInProgress = gameState.isInProgress(user.id);

  let card: JSX.Element | undefined;

  if (gameState.roundRun) {
    card = isInProgress ? (
      <StyledGameCardUserThinking />
    ) : (
      <StyledGameCardUserDecided />
    );
  } else {
    card = <StyledGameCardRoundResult score={gameState.getScore(user.id)} />;
  }

  return (
    <ProgressPair key={user.id}>
      <StyledUserCard user={user} avatarSize={80} />
      {card}
    </ProgressPair>
  );
});
