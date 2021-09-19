import React, { useEffect, useRef } from 'react';
import { Form, ModalProps } from 'antd';
import { Chat } from '@client/components/shared/chat/chat';
import { Input } from '@client/components/shared/input/input';
import {
  StyledButtonSend,
  StyledChatContainer,
  StyledChatEnd,
  StyledFailMessage,
  StyledFooter,
  StyledFormContainer,
  StyledFrame,
  StyledModal,
} from '@client/components/app/header/chat-modal.styles';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';
import { FormItem } from '@client/components/shared/form-item/form-item';
import { CHAT_MESSAGE_MAX_LENGTH } from '@shared/api-validation/api-constants';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';

export const ChatModal: React.FC<ModalProps> = observer(
  ({ visible, ...props }) => {
    const { gameStateActions, socketState, gameSocketActions } =
      useGameService();
    const [form] = Form.useForm();
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
      if (!visible) return;
      setTimeout(scrollToFirstNewMessage, 200);
    }, [visible]);

    useEffect(() => {
      scrollToBottom();
    }, [gameStateActions.messagesCount]);

    const onSend = async ({ message }: { message: string }) => {
      await gameSocketActions.postMessage(message);
      if (!socketState.isFail) {
        form.resetFields();
      }
    };

    const footer = [
      <StyledFooter>
        <Form
          form={form}
          onFinish={onSend}
          fields={[
            {
              name: 'message',
            },
          ]}>
          <StyledFormContainer>
            <FormItem
              name="message"
              rules={[
                {
                  required: true,
                  message: ApiFailMessage.MESSAGE_EMPTY,
                },
                {
                  type: 'string',
                  max: CHAT_MESSAGE_MAX_LENGTH,
                  message: `${ApiFailMessage.MESSAGE_TO_LONG}${CHAT_MESSAGE_MAX_LENGTH}`,
                },
              ]}>
              <Input />
            </FormItem>
            <StyledButtonSend
              type="primary"
              htmlType="submit"
              loading={socketState.isLoading}>
              Send
            </StyledButtonSend>
          </StyledFormContainer>
        </Form>
        {socketState.isFail ? (
          <StyledFailMessage>{socketState.failMessage}</StyledFailMessage>
        ) : null}
      </StyledFooter>,
    ];

    return (
      <StyledModal closable visible={visible} footer={footer} {...props}>
        <StyledFrame>
          <StyledChatContainer ref={refChat}>
            <Chat />
            <StyledChatEnd ref={refChatEnd} />
          </StyledChatContainer>
        </StyledFrame>
      </StyledModal>
    );
  }
);
