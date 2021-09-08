import React from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import {
  Message,
  MessageProps,
} from '@client/components/shared/message/message';

const testData: MessageProps[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    avatar: '',
    position: 'junior tester',
    isDelete: true,
    isOwner: true,
    message: "It's OK",
  },
  {
    firstName: 'Jane-Jane',
    lastName: 'Doe',
    avatar: '',
    position: 'middle tester',
    isDelete: true,
    isOwner: true,
    message: 'To be, or not to be, that is the question...',
  },
  {
    firstName: 'JoJoJoJoJoJoJoJo',
    lastName: 'DoDoDoDoDoDoDo',
    avatar: '',
    position: 'senior tester',
    isDelete: true,
    isOwner: true,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt dui eu ante porttitor porttitor.',
  },
];

export const PageMessageDemo: React.FC = () => {
  return (
    <DemoGrid>
      {testData.map((data) => (
        <div key={data.firstName + data.lastName}>
          <Message {...data} />
        </div>
      ))}
    </DemoGrid>
  );
};
