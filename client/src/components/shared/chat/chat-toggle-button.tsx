import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import React from 'react';
import {
  StyledChatButton,
  StyledChatButtonIcon,
  StyledChatButtonNum,
} from './chat-toggle-button.styles';

export const ChatToggleButton = observer(() => {
  const { modalState } = useStateService();

  const onShowChat = () => modalState.openChat();

  const isCountOverlayVisible = modalState.newMessagesCount > 0;

  return (
    <StyledChatButton
      type="link"
      icon={<StyledChatButtonIcon />}
      onClick={onShowChat}>
      {isCountOverlayVisible ? (
        <StyledChatButtonNum>{modalState.newMessagesCount}</StyledChatButtonNum>
      ) : null}
    </StyledChatButton>
  );
});
