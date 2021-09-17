import React from 'react';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';
import {
  StyledMessage,
  StyledChat,
  StyledDateTime,
  StyledMessageWrapper,
} from './chat.styles';

export const Chat: React.FC = observer(() => {
  const { gameState } = useGameService();
  return (
    <StyledChat>
      {gameState.messages.map(({ message, userId, date }) => {
        const maybeUser = gameState.users.find((user) => user.id === userId);
        if (!maybeUser) return null;
        return (
          <>
            <StyledMessageWrapper role={maybeUser.role}>
              <StyledMessage>{message}</StyledMessage>
              <StyledDateTime>{new Date(date).toLocaleString()}</StyledDateTime>
            </StyledMessageWrapper>
            <UserCard {...maybeUser} />
          </>
        );
      })}
    </StyledChat>
  );
});
