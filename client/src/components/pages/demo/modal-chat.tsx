import React, { useEffect } from 'react';
import { Chat } from '@client/components/shared/chat/chat';
import { Role } from '@shared/api-types/user';
import { UserFE } from '@client/services/game-state';
import { useStateService } from '@client/providers/state-service';
import { observer } from 'mobx-react-lite';
import { repeat } from '@shared/utils/array';
import { ChatMessageFE } from '@client/services/modal-state';

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
    date: '2021',
  },
  {
    userId: '2',
    message: 'To be, or not to be, that is the question...',
    date: '2021',
  },
  {
    userId: '4',
    message: "It's OK 🙂",
    date: '2021',
  },
  {
    userId: '1',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt dui eu ante porttitor.',
    date: '2021',
  },
];

const getDate = (min: number) =>
  new Date(2121, 12, 23, 13, min, Math.trunc(60 * Math.random())).toISOString();

export const PageChatDemo = observer(() => {
  const { modalState, gameState } = useStateService();

  useEffect(() => {
    gameState.initUser(
      {
        gameId: '123',
        gameTitle: 'Demo chat list',
        users: repeat(users, 5),
      },
      users[3].id
    );
    modalState.initMessages(
      repeat(messages, 5).map((msg, index) => ({
        ...msg,
        date: getDate(index),
      }))
    );
  }, []);

  useEffect(() => {
    setTimeout(
      () =>
        gameState.setUserKickResult({
          kicked: true,
          badUserId: '3',
          reason: 'kicked by scram master',
        }),
      2000
    );
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Chat />
    </div>
  );
});
