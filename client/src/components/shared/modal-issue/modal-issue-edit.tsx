import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { IssueBase } from '@shared/api-types/issue';
import { useGameService } from '@client/providers/game-service';
import { FormInstance } from 'antd';
import { ModalIssue } from '@client/components/shared/modal-issue/modal-issue';

export const ModalIssueEdit = observer(() => {
  const { modalState, gameSocketActions } = useGameService();

  const initFieldsHook = (form: FormInstance) => {
    useEffect(() => {
      form.setFieldsValue({ ...modalState.editIssue });
    }, [modalState.editIssue]);
  };

  const onReset = () => {
    modalState.resetEditIssue();
  };

  const onSubmit = async (issue: IssueBase) => {
    if (!modalState.editIssue) return;
    await gameSocketActions.editIssue({ ...modalState.editIssue, ...issue });
  };

  return (
    <ModalIssue
      visible={modalState.isEditIssueActive}
      title="Edit Issue"
      initFieldsHook={initFieldsHook}
      onReset={onReset}
      onSubmit={onSubmit}
    />
  );
});
