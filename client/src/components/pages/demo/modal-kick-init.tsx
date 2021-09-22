import React, { useEffect } from 'react';
import { ErrorBoundary } from '@client/utils/error-boundary';
import { ModalKickInit } from '@client/components/shared/modal-kick/modal-kick-init';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { Role, UsersList } from '@shared/api-types/user';

const users: UsersList = [
  {
    id: '1',
    firstName: 'David',
    lastName: 'Blane',
    jobPosition: 'senior tester',
    role: Role.GAMER,
  },
];

export const ModalKickInitDemo: React.FC = observer(() => {
  const { gameStateActions } = useGameService();

  useEffect(() => {
    gameStateActions.initUser(
      {
        gameId: '42',
        gameTitle: 'Awesome',
        users,
      },
      users[0].id
    );
    gameStateActions.initKick('1');
  }, []);

  return (
    <ErrorBoundary>
      <ModalKickInit />
    </ErrorBoundary>
  );
});
