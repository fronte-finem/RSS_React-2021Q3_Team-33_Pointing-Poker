import React from 'react';
import { observer } from 'mobx-react-lite';
import { IOption } from '@client/components/shared/select/select';
import { Modal } from '@client/components/shared/modal/modal';
import { IssueBase, Priority } from '@shared/api-types/issue';
import { useGameService } from '@client/providers/game-service';
import { Form, FormInstance, message } from 'antd';
import {
  StyledFormItem,
  StyledInput,
  StyledSelect,
  StyledWrapper,
} from '@client/components/shared/modal-issue/modal-issue.styles';

const options: IOption[] = Object.entries(Priority).map(([value, label]) => ({
  value,
  label,
}));

interface Props {
  visible: boolean;
  title: string;
  initFieldsHook: (form: FormInstance) => void;
  onReset: () => void;
  onSubmit: (issue: IssueBase) => Promise<void>;
}

export const ModalIssue: React.FC<Props> = observer(
  ({ visible, title, initFieldsHook, onReset, onSubmit }) => {
    const { socketState } = useGameService();
    const [form] = Form.useForm();

    initFieldsHook(form);

    const resetForm = () => {
      form.resetFields();
      onReset();
    };

    const submitForm = () => {
      form.submit();
    };

    const onFinish = async (issue: IssueBase) => {
      await onSubmit(issue);
      if (socketState.isFail) {
        message.error(socketState.failMessage);
      } else {
        resetForm();
      }
    };

    return (
      <Modal
        okText="Yes"
        cancelText="No"
        title={title}
        visible={visible}
        onOk={submitForm}
        onCancel={resetForm}
        confirmLoading={socketState.isLoading}
        forceRender>
        <Form
          form={form}
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          labelAlign="left">
          <StyledWrapper>
            <StyledFormItem label="Title" name="title">
              <StyledInput />
            </StyledFormItem>
            <StyledFormItem label="Link" name="link">
              <StyledInput />
            </StyledFormItem>
            <StyledFormItem label="Priority" name="priority">
              <StyledSelect options={options} size="large" />
            </StyledFormItem>
          </StyledWrapper>
        </Form>
      </Modal>
    );
  }
);
