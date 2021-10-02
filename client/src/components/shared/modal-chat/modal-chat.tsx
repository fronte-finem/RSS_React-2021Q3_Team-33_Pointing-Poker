import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Alert } from 'antd';
import { useStateService } from '@client/providers/state-service';
import { Chat } from '@client/components/shared/chat/chat';
import { SendForm } from '@client/components/shared/chat/send-form';
import { CloseCircleOutlined } from '@ant-design/icons';
import {
  ChatDrawer,
  SendWrapper,
  StyledChatContainer,
  StyledChatEnd,
  StyledFrame,
} from './modal-chat.styles';

export const ModalChat = observer(() => {
  const { modalState } = useStateService();
  const refChat = useRef<HTMLDivElement | null>(null);
  const refChatEnd = useRef<HTMLDivElement | null>(null);

  const scrollToFirstNewMessage = () => {
    refChat.current?.scrollBy({
      top: 30,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    refChatEnd.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  useEffect(() => {
    if (!modalState.chatIsOpen) return;
    setTimeout(scrollToFirstNewMessage, 200);
  }, [modalState.chatIsOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [modalState.messagesCount]);

  return (
    <ChatDrawer
      placement="right"
      onClose={() => modalState.closeChat()}
      visible={modalState.chatIsOpen}
      width="min(900px, max(400px, 90%))"
      closeIcon={<CloseCircleOutlined />}>
      <StyledFrame>
        <StyledChatContainer ref={refChat}>
          <Alert.ErrorBoundary>
            <Chat />
          </Alert.ErrorBoundary>
          <StyledChatEnd ref={refChatEnd} />
        </StyledChatContainer>
      </StyledFrame>
      <SendWrapper>
        <SendForm />
      </SendWrapper>
    </ChatDrawer>
  );
});
