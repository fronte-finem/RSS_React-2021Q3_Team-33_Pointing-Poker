import React, { useEffect } from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { Role } from '@shared/api-types/user';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { UserFE } from '@client/services/game-state';

const users: UserFE[] = [
  {
    id: '1',
    firstName: 'Gandalf the Grey',
    jobPosition: 'senior wizard',
    role: Role.DEALER,
  },
  {
    id: '2',
    firstName: 'Yoda',
    jobPosition: 'jedi master',
    role: Role.GAMER,
  },
  {
    id: '3',
    firstName: 'David',
    lastName: 'Blaine',
    jobPosition: 'middle street mage',
    role: Role.GAMER,
    kicked: {
      reason: 'Well we test kick state :)',
    },
  },
  {
    id: '4',
    firstName: 'Harry',
    lastName: 'Potter',
    jobPosition: 'junior wizard',
    role: Role.GAMER,
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
      users[3].id
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
