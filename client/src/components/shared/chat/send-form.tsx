import React from 'react';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';
import { Form, message } from 'antd';
import { FormItem } from '@client/components/shared/form-item/form-item';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { CHAT_MESSAGE_MAX_LENGTH } from '@shared/api-validation/api-constants';
import { Input } from '@client/components/shared/input/input';
import { StyledButtonSend, StyledFormContainer } from './send-form.styles';

export const SendForm = observer(() => {
  const { socketState, gameSocketActions } = useGameService();
  const [form] = Form.useForm();

  const onSend = async (post: { message: string }) => {
    await gameSocketActions.postMessage(post.message);
    if (socketState.isFail) {
      message.error(socketState.failMessage);
    } else {
      form.resetFields();
    }
  };

  return (
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
  );
});
