import React from 'react';
import { Avatar } from '@client/components/shared/avatar/avatar';
import { Tooltip } from 'antd';
import { Role, UserBase } from '@shared/api-types/user';
import { UserFE } from '@client/services/game-state';
import { useStateService } from '@client/providers/state-service';
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

interface UserCardProps {
  user?: UserFE | null;
  className?: string;
  style?: React.CSSProperties;
  avatarSize?: number;
}

export const UserCard: React.FC<UserCardProps> = observer(
  ({ user, className, style, avatarSize = 50 }) => {
    const { modalState, gameState } = useStateService();

    if (!user) return null;
    const { id, firstName, lastName, avatar, jobPosition, role } = user;
    const username = getFullName({ firstName, lastName });
    const isKicked = Boolean(user.kicked);
    const isDisconnected = Boolean(user.disconnected);

    const isOwner = gameState.selfUserId === id;
    const isKickPossible =
      !isDisconnected && !isKicked && !isOwner && role !== Role.DEALER;

    const onKick = async () => {
      modalState.initKickUser(id);
    };

    const kickBtn = (
      <StyledButton
        type="link"
        icon={<StyleStopOutlined rotate={90} />}
        onClick={onKick}
      />
    );

    return (
      <StyleCard
        userRole={role}
        userKicked={isKicked}
        userDisconnected={isDisconnected}
        className={className}
        style={style}>
        <StyledAvatarContainer>
          <Avatar user={user} size={avatarSize} src={avatar} />
        </StyledAvatarContainer>
        <StyledBodyContainer>
          <StyleCardOwner>{isOwner ? "It's you" : ''}</StyleCardOwner>
          <Tooltip title={username} placement="bottom">
            <StyledUsername>{username}</StyledUsername>
          </Tooltip>
          <StyledJobPosition>{jobPosition}</StyledJobPosition>
        </StyledBodyContainer>
        <StyledControlContainer>
          {isKickPossible ? kickBtn : null}
        </StyledControlContainer>
      </StyleCard>
    );
  }
);
