import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Issue, IssueBase, Priority } from '@shared/api-types/issue';
import { useStateService } from '@client/providers/state-service';
import { FormInstance } from 'antd';
import { ModalIssue } from '@client/components/shared/modal-issue/modal-issue';
import { getLast } from '@shared/utils/array';

const addId = (issue: IssueBase, issues: Issue[]) => {
  const maybeId = getLast(issues)?.id;
  const id = `${maybeId ? 1 + Number(maybeId) : 1}`;
  return { ...issue, id };
};

export const ModalIssueCreate = observer(() => {
  const { gameState, modalState, socketState } = useStateService();

  const initFieldsHook = (form: FormInstance) => {
    useEffect(() => {
      form.setFieldsValue({ priority: Priority.HIGH });
    }, [modalState.createIssue]);
  };

  const onReset = () => {
    modalState.resetCreateIssue();
  };

  const onSubmit = async (issue: IssueBase) => {
    if (gameState.isModeLobbyDealer) {
      const ok = gameState.addIssue(addId(issue, gameState.issues));
      if (ok) modalState.resetCreateIssue();
      return ok;
    }
    if (gameState.isModeGame) await socketState.addIssue(issue);
    return !socketState.isFail;
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
