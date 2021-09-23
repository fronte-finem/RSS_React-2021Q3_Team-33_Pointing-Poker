import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Alert } from 'antd';
import { useStateService } from '@client/providers/state-service';
import { Chat } from '@client/components/shared/chat/chat';
import { SendForm } from '@client/components/shared/chat/send-form';
import {
  StyledChatContainer,
  StyledChatEnd,
  StyledCloseIcon,
  StyledFrame,
  StyledModal,
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

  const onCancel = () => modalState.closeChat();

  return (
    <StyledModal
      visible={modalState.chatIsOpen}
      zIndex={10}
      onCancel={onCancel}
      closeIcon={<StyledCloseIcon />}
      closable
      footer={null}>
      <StyledFrame>
        <StyledChatContainer ref={refChat}>
          <Alert.ErrorBoundary>
            <Chat />
          </Alert.ErrorBoundary>
          <StyledChatEnd ref={refChatEnd} />
        </StyledChatContainer>
      </StyledFrame>
      <SendForm />
    </StyledModal>
  );
});
