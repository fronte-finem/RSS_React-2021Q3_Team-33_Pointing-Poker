import React from 'react';
import { observer } from 'mobx-react-lite';
import { Modal } from '@client/components/shared/modal/modal';
import { useStateService } from '@client/providers/state-service';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { Center } from './modal-issue.styles';

export const ModalIssueDelete: React.FC = observer(() => {
  const { gameState, modalState, socketState } = useStateService();

  const onCancel = () => {
    modalState.resetDeleteIssue();
  };

  const onOk = async () => {
    if (!modalState.deleteIssue) return;
    if (gameState.isModeLobbyDealer) {
      gameState.deleteIssue(modalState.deleteIssue.id);
      modalState.resetDeleteIssue();
      return;
    }
    await socketState.deleteIssue(modalState.deleteIssue.id);
    if (!socketState.isFail) {
      onCancel();
    }
  };

  return (
    <Modal
      title="Delete Issue"
      okText="Yes"
      cancelText="No"
      visible={modalState.isDeleteIssueActive}
      onOk={onOk}
      onCancel={onCancel}>
      <p>Are you really want to delete issue:</p>
      <Center>
        <IssueCard issue={modalState.deleteIssue!} />
      </Center>
    </Modal>
  );
});
