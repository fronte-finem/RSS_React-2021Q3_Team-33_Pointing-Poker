import React from 'react';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';
import { Post, SystemPost } from '@client/components/shared/chat/post';
import { StyledChat } from './chat.styles';

export const Chat = observer(() => {
  const { modalState } = useGameService();
  return (
    <StyledChat>
      {modalState.messages.map((post) => {
        const PostComponent = post.system ? SystemPost : Post;
        const key = post.userId + post.date;
        return <PostComponent key={key} post={post} />;
      })}
    </StyledChat>
  );
});
