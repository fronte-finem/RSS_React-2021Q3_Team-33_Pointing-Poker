import React from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { Role, UsersList } from '@shared/api-types/user';

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

export const PageUserCardDemo: React.FC = () => {
  return (
    <DemoGrid>
      {users.map((data) => (
        <div key={data.firstName + data.lastName}>
          <UserCard {...data} />
        </div>
      ))}
    </DemoGrid>
  );
};
