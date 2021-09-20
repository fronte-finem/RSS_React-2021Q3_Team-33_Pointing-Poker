import React, { useEffect } from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { Role, UsersList } from '@shared/api-types/user';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';

const users: UsersList = [
  {
    id: '1',
    firstName: 'JoJoJoJoJoJoJoJo',
    lastName: 'DoDoDoDoDoDoDo',
    jobPosition: 'senior tester',
    role: Role.DEALER,
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

export const PageUserCardDemo: React.FC = observer(() => {
  const { gameStateActions } = useGameService();

  useEffect(() => {
    gameStateActions.initUser(
      {
        gameId: '42',
        gameTitle: 'Awesome',
        users,
      },
      users[1].id
    );
  }, []);

  return (
    <DemoGrid>
      {users.map((user) => (
        <div key={user.id}>
          <UserCard user={user} />
        </div>
      ))}
    </DemoGrid>
  );
});
