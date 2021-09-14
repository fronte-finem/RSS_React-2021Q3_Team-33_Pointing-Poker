import { UserCard } from '@client/components/shared/user-card/user-card';
import { Role, User } from '@shared/api-types/user';
import React from 'react';
import { StyleLobbyTitle } from '../lobby-styles';
import { StyleLobbyUsers, StyleLobbyUsersWrapper } from './lobby-users-styles';

export const LobbyUsersSection: React.FC = () => {
  const users: Array<User> = [
    {
      firstName: 'David',
      lastName: 'Blane',
      jobPosition: 'senior software engineer',
      avatar: '',
      id: '1',
      role: Role.GAMER,
    },
    {
      firstName: 'Dayana',
      lastName: 'Ross',
      jobPosition: 'junior software engineer',
      avatar: '',
      id: '1',
      role: Role.GAMER,
    },
    {
      firstName: 'Daniel',
      lastName: 'Horn',
      jobPosition: '',
      avatar: '',
      id: '1',
      role: Role.GAMER,
    },
    {
      firstName: 'Mark',
      lastName: 'Single',
      jobPosition: 'senior software engineer',
      avatar: '',
      id: '1',
      role: Role.GAMER,
    },
    {
      firstName: 'Jane',
      lastName: 'Ring',
      jobPosition: 'software engineer',
      avatar: '',
      id: '1',
      role: Role.GAMER,
    },
    {
      firstName: 'Larry',
      lastName: 'King',
      jobPosition: 'junior software engineer',
      avatar: '',
      id: '1',
      role: Role.GAMER,
    },
    {
      firstName: 'Fill',
      lastName: '',
      jobPosition: 'QA engineer',
      avatar: '',
      id: '1',
      role: Role.GAMER,
    },
  ];

  return (
    <StyleLobbyUsers>
      <StyleLobbyTitle
        level={2}
        style={{
          fontSize: '24px',
          lineHeight: '30px',
          fontWeight: 'bold',
        }}>
        Members:
      </StyleLobbyTitle>
      <StyleLobbyUsersWrapper gutter={[0, 20]}>
        {users.map((user: User) => (
          <UserCard
            firstName={user.firstName}
            lastName={user.lastName!}
            position={user.jobPosition!}
            avatar={user.avatar!}
            isOwner={false}
            isDelete
          />
        ))}
      </StyleLobbyUsersWrapper>
    </StyleLobbyUsers>
  );
};
