import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { ChatMessageFE } from '@client/services/modal-state';
import {
  StyledDateTime,
  StyledMessage,
  StyledMessageWrapper,
  StyledPost,
  StyledSystemMessageWrapper,
  StyledSystemPost,
} from './post.styles';

interface PostProps {
  post: ChatMessageFE;
}

export const Post = observer(
  ({ post: { userId, message, date } }: PostProps) => {
    const { gameStateActions } = useGameService();

    const maybeUser = gameStateActions.getUser(userId);
    if (!maybeUser) return null;

    const isKicked = Boolean(maybeUser.kicked);

    return (
      <StyledPost>
        <UserCard user={maybeUser} />
        <StyledMessageWrapper userRole={maybeUser.role} userKicked={isKicked}>
          <StyledMessage>{message}</StyledMessage>
          <StyledDateTime>{new Date(date).toLocaleTimeString()}</StyledDateTime>
        </StyledMessageWrapper>
      </StyledPost>
    );
  }
);

export const SystemPost = observer(
  ({ post: { userId, message, date } }: PostProps) => {
    const { gameStateActions } = useGameService();

    const maybeUser = gameStateActions.getUser(userId);
    if (!maybeUser) return null;

    return (
      <StyledSystemPost key={userId + date + message.substr(0, 20)}>
        <StyledSystemMessageWrapper userRole={maybeUser.role}>
          <UserCard user={maybeUser} style={{ opacity: 1 }} />
          <StyledMessage>{message}</StyledMessage>
          <StyledDateTime>{new Date(date).toLocaleTimeString()}</StyledDateTime>
        </StyledSystemMessageWrapper>
      </StyledSystemPost>
    );
  }
);
