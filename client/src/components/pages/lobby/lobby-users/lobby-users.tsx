import { UserCard } from '@client/components/shared/user-card/user-card';
import { useGameService } from '@client/providers/game-service';
import { Role, User } from '@shared/api-types/user';
import React from 'react';
import { StyleLobbyTitle } from '../lobby-styles';
import { StyleLobbyUsers, StyleLobbyUsersWrapper } from './lobby-users-styles';

export const LobbyUsersSection: React.FC = () => {
  const { gameState } = useGameService();
  const users = gameState.users.filter((user) => user.role !== Role.DEALER);

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
            isOwner={user.id === gameState.selfUserId}
            isDelete={user.id !== gameState.selfUserId}
            key={user.id}
          />
        ))}
      </StyleLobbyUsersWrapper>
    </StyleLobbyUsers>
  );
};
