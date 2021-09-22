import React from 'react';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';
import {
  StyledMessage,
  StyledChat,
  StyledDateTime,
  StyledMessageWrapper,
  StyledPost,
  StyledSystemMessageWrapper,
  StyledSystemPost,
} from './chat.styles';

export const Chat = observer(() => {
  const { gameState, gameStateActions } = useGameService();
  return (
    <StyledChat>
      {gameState.messages.map(({ message, userId, date, system }, index) => {
        const maybeUser = gameStateActions.getUser(userId);
        if (!maybeUser) return null;

        if (system) {
          return (
            <StyledSystemPost key={userId + date + index.toString()}>
              <StyledSystemMessageWrapper userRole={maybeUser.role}>
                <UserCard user={maybeUser} style={{ opacity: 1 }} />
                <StyledMessage>{message}</StyledMessage>
                <StyledDateTime>
                  {new Date(date).toLocaleTimeString()}
                </StyledDateTime>
              </StyledSystemMessageWrapper>
            </StyledSystemPost>
          );
        }

        const isKicked = Boolean(maybeUser.kicked);
        return (
          <StyledPost key={userId + date + index.toString()}>
            <UserCard user={maybeUser} />
            <StyledMessageWrapper
              userRole={maybeUser.role}
              userKicked={isKicked}>
              <StyledMessage>{message}</StyledMessage>
              <StyledDateTime>
                {new Date(date).toLocaleTimeString()}
              </StyledDateTime>
            </StyledMessageWrapper>
          </StyledPost>
        );
      })}
    </StyledChat>
  );
});
