import React, { useEffect } from 'react';
import { Alert } from 'antd';
import { ModalKick } from '@client/components/shared/modal-kick/modal-kick';
import { Role, UsersList } from '@shared/api-types/user';
import { useStateService } from '@client/providers/state-service';

const users: UsersList = [
  {
    id: '1',
    firstName: 'David',
    lastName: 'Blane',
    jobPosition: 'senior tester',
    role: Role.GAMER,
  },
  {
    id: '2',
    firstName: 'Jane-Jane',
    lastName: 'Doe',
    jobPosition: 'middle tester',
    role: Role.GAMER,
  },
  {
    id: '3',
    firstName: 'John',
    lastName: 'Doe',
    jobPosition: 'junior tester',
    role: Role.SPECTATOR,
  },
];

export const ModalKickVotingDemo: React.FC = () => {
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
    modalState.initKickVote({ initiatorId: '3', badUserId: '1' });
  }, []);

  return (
    <Alert.ErrorBoundary>
      <ModalKick />
    </Alert.ErrorBoundary>
  );
};
