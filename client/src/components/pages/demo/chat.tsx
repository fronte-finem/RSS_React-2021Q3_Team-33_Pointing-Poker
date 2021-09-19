import React, { useEffect } from 'react';
import { Chat } from '@client/components/shared/chat/chat';
import { Role, UsersList } from '@shared/api-types/user';
import { ChatMessagesList } from '@shared/api-types/chat';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';
import { repeat } from '@shared/utils/array';

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

const messages: ChatMessagesList = [
  {
    userId: '3',
    message: "It's OK",
    date: new Date(2121, 12, 23, 13, 23, 56).toISOString(),
  },
  {
    userId: '2',
    message: 'To be, or not to be, that is the question...',
    date: new Date(2121, 12, 23, 13, 24, 23).toISOString(),
  },
  {
    userId: '1',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt dui eu ante porttitor porttitor.',
    date: new Date(2121, 12, 23, 13, 26, 32).toISOString(),
  },
];

export const PageChatDemo = observer(() => {
  const { gameStateActions } = useGameService();

  useEffect(() => {
    gameStateActions.initUser(
      {
        gameId: '123',
        gameTitle: 'Awesome',
        users: repeat(users, 5),
        messages: repeat(messages, 5),
      },
      users[1].id
    );
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Chat />
    </div>
  );
});
