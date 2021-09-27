import { UserFE } from '@client/services/game-state';
import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  ProgressPair,
  StyledGameCard,
  StyledUserCard,
} from './user-progress.styles';

interface Props {
  user?: UserFE;
}

export const UserProgress = observer(function UserProgress({ user }: Props) {
  if (!user) return null;
  return (
    <ProgressPair key={user.id}>
      <StyledUserCard user={user} avatarSize={80} />
      <StyledGameCard score={123} />
    </ProgressPair>
  );
});
