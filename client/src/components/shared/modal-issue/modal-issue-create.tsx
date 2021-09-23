import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { IssueBase, Priority } from '@shared/api-types/issue';
import { useStateService } from '@client/providers/state-service';
import { FormInstance } from 'antd';
import { ModalIssue } from '@client/components/shared/modal-issue/modal-issue';

export const ModalIssueCreate = observer(() => {
  const { modalState, socketState } = useStateService();

  const initFieldsHook = (form: FormInstance) => {
    useEffect(() => {
      form.setFieldsValue({ priority: Priority.HIGH });
    }, [modalState.createIssue]);
  };

  const onReset = () => {
    modalState.resetCreateIssue();
  };

  const onSubmit = async (issue: IssueBase) => {
    await socketState.addIssue(issue);
  };

  return (
    <ModalIssue
      visible={modalState.createIssue}
      title="Create Issue"
      initFieldsHook={initFieldsHook}
      onReset={onReset}
      onSubmit={onSubmit}
    />
  );
});
