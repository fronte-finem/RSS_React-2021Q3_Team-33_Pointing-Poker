import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { IssueBase } from '@shared/api-types/issue';
import { useStateService } from '@client/providers/state-service';
import { FormInstance } from 'antd';
import { ModalIssue } from '@client/components/shared/modal-issue/modal-issue';

export const ModalIssueEdit = observer(() => {
  const { gameState, modalState, socketState } = useStateService();

  const initFieldsHook = (form: FormInstance) => {
    useEffect(() => {
      form.setFieldsValue({ ...modalState.editIssue });
    }, [modalState.editIssue]);
  };

  const onReset = () => {
    modalState.resetEditIssue();
  };

  const onSubmit = async (issue: IssueBase) => {
    if (!modalState.editIssue) return false;
    if (gameState.isModeLobbyDealer) {
      const ok = gameState.modifyIssueValidate({
        ...modalState.editIssue,
        ...issue,
      });
      if (ok) modalState.resetEditIssue();
      return ok;
    }
    await socketState.editIssue({ ...modalState.editIssue, ...issue });
    return !socketState.isFail;
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
