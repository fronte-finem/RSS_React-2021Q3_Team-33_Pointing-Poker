import React from 'react';
import { Avatar } from '@client/components/shared/avatar/avatar';
import { Tooltip } from 'antd';
import { User, UserBase } from '@shared/api-types/user';
import { useGameService } from '@client/providers/game-service';
import {
  StyleCard,
  StyleCardOwner,
  StyledJobPosition,
  StyledUsername,
  StyleStopOutlined,
  StyledAvatarContainer,
  StyledBodyContainer,
  StyledControlContainer,
} from './user-card-styles';

export interface UserCardProps {
  firstName: string;
  lastName: string;
  position: string;
  isOwner: boolean;
  isDelete?: boolean;
  avatar: string;
}

const deleteUser = () => {
  console.log('delete user');
  // TODO: add delete user
};

const getFullName = ({ firstName, lastName }: UserBase) =>
  [firstName, lastName].filter((name) => Boolean(name)).join(' ');

export const UserCard: React.FC<User> = (user) => {
  const { gameState } = useGameService();
  const { id, firstName, lastName, avatar, jobPosition } = user;
  const username = getFullName({ firstName, lastName });

  const isOwner = gameState.selfUserId === id;
  const isDelete = !isOwner;

  return (
    <StyleCard>
      <StyledAvatarContainer>
        <Avatar user={user} size={83} src={avatar} />
      </StyledAvatarContainer>
      <StyledBodyContainer>
        {isOwner ? <StyleCardOwner>It&prime;s you</StyleCardOwner> : ''}
        <Tooltip title={username} placement="bottom">
          <StyledUsername>{username}</StyledUsername>
        </Tooltip>
        <StyledJobPosition>{jobPosition}</StyledJobPosition>
      </StyledBodyContainer>
      {isDelete && (
        <StyledControlContainer>
          <StyleStopOutlined rotate={90} onClick={deleteUser} />
        </StyledControlContainer>
      )}
    </StyleCard>
  );
};
