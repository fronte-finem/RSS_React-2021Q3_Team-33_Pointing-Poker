import React, { useEffect } from 'react';
import { message } from 'antd';
import { Chat } from '@client/components/shared/chat/chat';
import { Role } from '@shared/api-types/user';
import { ChatMessageFE, UserFE } from '@client/services/game-state';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';
import { repeat } from '@shared/utils/array';

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
  },
  {
    id: '4',
    firstName: 'Harry',
    lastName: 'Potter',
    jobPosition: 'junior wizard',
    role: Role.GAMER,
  },
];

const messages: ChatMessageFE[] = [
  {
    userId: '3',
    message: 'Somebody wants to see street magic?',
    date: new Date(2121, 12, 23, 13, 23, 56).toISOString(),
  },
  {
    userId: '2',
    message: 'To be, or not to be, that is the question...',
    date: new Date(2121, 12, 23, 13, 24, 23).toISOString(),
  },
  {
    userId: '4',
    message: "It's OK 🙂",
    date: new Date(2121, 12, 23, 13, 25, 25).toISOString(),
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
        gameTitle: 'Demo chat list',
        users: repeat(users, 5),
        messages: repeat(messages, 5),
      },
      users[3].id
    );
  }, []);

  useEffect(() => {
    setTimeout(
      () =>
        gameStateActions.endKick({
          kicked: true,
          badUserId: '3',
          reason: 'kicked by scram master',
        }),
      2000
    );
  }, []);

  useEffect(() => {
    if (!gameStateActions.kickResult) return;
    message.info(gameStateActions.kickResult).then(null);
  }, [gameStateActions.kickResult]);

  return (
    <div style={{ padding: 20 }}>
      <Chat />
    </div>
  );
});
