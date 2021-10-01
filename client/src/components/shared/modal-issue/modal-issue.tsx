import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, FormInstance } from 'antd';
import { IOption } from '@client/components/shared/select/select';
import { Modal } from '@client/components/shared/modal/modal';
import { IssueBase, Priority } from '@shared/api-types/issue';
import { useStateService } from '@client/providers/state-service';
import {
  StyledFormItem,
  StyledInput,
  StyledSelect,
  StyledWrapper,
} from './modal-issue.styles';

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
    const { socketState } = useStateService();
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
      if (socketState.isFail) return;
      resetForm();
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
