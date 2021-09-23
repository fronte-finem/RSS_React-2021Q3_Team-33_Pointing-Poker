import React, { useEffect } from 'react';
import { ErrorBoundary } from '@client/utils/error-boundary';
import { ModalKickInit } from '@client/components/shared/modal-kick/modal-kick-init';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
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
  const { modalState, gameState } = useStateService();

  useEffect(() => {
    gameState.initUser(
      {
        gameId: '42',
        gameTitle: 'Awesome',
        users,
      },
      users[0].id
    );
    modalState.initKickUser('1');
  }, []);

  return (
    <ErrorBoundary>
      <ModalKickInit />
    </ErrorBoundary>
  );
});
