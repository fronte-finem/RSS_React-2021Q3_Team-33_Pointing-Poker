import React from 'react';
import { UserFE } from '@client/services/game-state';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { StyleLobbyTitle } from '../lobby-styles';
import { StyleLobbyUsersGrid } from './lobby-users-styles';

interface Props {
  title: string;
  users: UserFE[];
}

export const UsersSection = ({ users, title }: Props) => {
  if (users.length < 1) return null;
  return (
    <>
      <StyleLobbyTitle level={2}>{title}:</StyleLobbyTitle>
      <StyleLobbyUsersGrid>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyleLobbyUsersGrid>
    </>
  );
};
