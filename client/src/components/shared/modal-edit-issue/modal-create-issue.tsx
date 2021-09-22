import React from 'react';
import { observer } from 'mobx-react-lite';
import { IOption } from '@client/components/shared/select/select';
import { Modal } from '@client/components/shared/modal/modal';
import { IssueBase, Priority } from '@shared/api-types/issue';
import { useGameService } from '@client/providers/game-service';
import { Form, message } from 'antd';
import {
  StyledFormItem,
  StyledInput,
  StyledSelect,
  StyledWrapper,
} from '@client/components/shared/modal-edit-issue/modal-issue.styles';

const options: IOption[] = Object.entries(Priority).map(([value, label]) => ({
  value,
  label,
}));

export const ModalCreateIssue = observer(() => {
  const { modalState, socketState, gameSocketActions } = useGameService();
  const [form] = Form.useForm();

  const onCancel = () => {
    modalState.resetCreateIssue();
  };

  const onOk = () => {
    form.submit();
  };

  const onFinish = async (issue: IssueBase) => {
    console.log(issue);
    await gameSocketActions.addIssue(issue);
    if (socketState.isFail) {
      message.error(socketState.failMessage);
    } else {
      modalState.resetCreateIssue();
    }
  };

  return (
    <Modal
      okText="Yes"
      cancelText="No"
      title="Create Issue"
      visible={modalState.createIssue}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={socketState.isLoading}>
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        labelAlign="left"
        initialValues={{
          title: undefined,
          link: undefined,
          priority: options[0].value,
        }}>
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
});
