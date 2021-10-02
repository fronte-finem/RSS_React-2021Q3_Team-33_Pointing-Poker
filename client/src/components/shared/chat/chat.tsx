import React from 'react';
import { useStateService } from '@client/providers/state-service';
import { observer } from 'mobx-react-lite';
import { Post, SystemPost } from '@client/components/shared/chat/post';
import { StyledChat } from './chat.styles';

export const Chat = observer(() => {
  const { modalState } = useStateService();
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
