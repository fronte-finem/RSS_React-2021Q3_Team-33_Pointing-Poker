import React from 'react';
import { Avatar } from '@client/components/shared/avatar/avatar';
import { Tooltip } from 'antd';
import { Role, User, UserBase } from '@shared/api-types/user';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';
import {
  StyleCard,
  StyleCardOwner,
  StyledAvatarContainer,
  StyledBodyContainer,
  StyledControlContainer,
  StyledJobPosition,
  StyledUsername,
  StyledButton,
  StyleStopOutlined,
} from './user-card-styles';

const getFullName = ({ firstName, lastName }: UserBase) =>
  [firstName, lastName].filter((name) => Boolean(name)).join(' ');

export const UserCard: React.FC<User> = observer((user) => {
  const { gameState, gameSocketActions } = useGameService();
  const { id, firstName, lastName, avatar, jobPosition } = user;
  const username = getFullName({ firstName, lastName });

  const isOwner = gameState.selfUserId === id;
  const isDelete = !isOwner && user.role !== Role.DEALER;

  const onDelete = () => gameSocketActions.kick(id);

  const deleteBtn = (
    <StyledButton
      type="link"
      icon={<StyleStopOutlined rotate={90} />}
      onClick={onDelete}
    />
  );

  return (
    <StyleCard userRole={user.role}>
      <StyledAvatarContainer>
        <Avatar user={user} size={83} src={avatar} />
      </StyledAvatarContainer>
      <StyledBodyContainer>
        {isOwner ? <StyleCardOwner>It&prime;s you</StyleCardOwner> : null}
        <Tooltip title={username} placement="bottom">
          <StyledUsername>{username}</StyledUsername>
        </Tooltip>
        <StyledJobPosition>{jobPosition}</StyledJobPosition>
      </StyledBodyContainer>
      <StyledControlContainer>
        {isDelete ? deleteBtn : null}
      </StyledControlContainer>
    </StyleCard>
  );
});
