import React from 'react';
import { UserFE } from '@client/services/game-state';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { StyledTitle } from '@client/components/styles/text';
import { StyleLobbyUsersGrid } from './lobby-users-styles';

interface Props {
  title: string;
  users: UserFE[];
}

export const UsersSection = ({ users, title }: Props) => {
  if (users.length < 1) return null;
  return (
    <>
      <StyledTitle level={2}>{title}:</StyledTitle>
      <StyleLobbyUsersGrid>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyleLobbyUsersGrid>
    </>
  );
};
