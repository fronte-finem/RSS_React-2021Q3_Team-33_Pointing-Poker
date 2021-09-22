import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { IssueBase, Priority } from '@shared/api-types/issue';
import { useGameService } from '@client/providers/game-service';
import { FormInstance } from 'antd';
import { ModalIssue } from '@client/components/shared/modal-issue/modal-issue';

export const ModalIssueCreate = observer(() => {
  const { modalState, gameSocketActions } = useGameService();

  const updateHook = (form: FormInstance) => {
    useEffect(() => {
      form.setFieldsValue({ priority: Priority.HIGH });
    }, [modalState.createIssue]);
  };

  const onReset = () => {
    modalState.resetCreateIssue();
  };

  const onSubmit = async (issue: IssueBase) => {
    await gameSocketActions.addIssue(issue);
  };

  return (
    <ModalIssue
      visible={modalState.createIssue}
      title="Create Issue"
      setUpdateHook={updateHook}
      onReset={onReset}
      onSubmit={onSubmit}
    />
  );
});
