import React from 'react';
import { useStateService } from '@client/providers/state-service';
import { observer } from 'mobx-react-lite';
import { Form } from 'antd';
import { FormItem } from '@client/components/shared/form-item/form-item';
import { ApiFailMessage } from '@shared/api-validation/api-fail-message';
import { CHAT_MESSAGE_MAX_LENGTH } from '@shared/api-validation/api-constants';
import { Input } from '@client/components/shared/input/input';
import { StyledButtonSend, StyledFormContainer } from './send-form.styles';

export const SendForm = observer(() => {
  const { socketState } = useStateService();
  const [form] = Form.useForm();

  const onSend = async (post: { message: string }) => {
    await socketState.postMessage(post.message);
    if (socketState.isFail) return;
    form.resetFields();
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
              whitespace: true,
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
