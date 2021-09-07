import React from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import {
  UserCard,
  UserCardProps,
} from '@client/components/shared/user-card/user-card';

const testData: UserCardProps[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    avatar: '',
    position: 'junior tester',
    isDelete: true,
    isOwner: true,
  },
  {
    firstName: 'Jane-Jane',
    lastName: 'Doe',
    avatar: '',
    position: 'middle tester',
    isDelete: true,
    isOwner: true,
  },
  {
    firstName: 'JoJoJoJoJoJoJoJo',
    lastName: 'DoDoDoDoDoDoDo',
    avatar: '',
    position: 'senior tester',
    isDelete: true,
    isOwner: true,
  },
];

export const PageUserCardDemo: React.FC = () => {
  return (
    <DemoGrid>
      {testData.map((data) => (
        <div key={data.firstName + data.lastName}>
          <UserCard {...data} />
        </div>
      ))}
    </DemoGrid>
  );
};
