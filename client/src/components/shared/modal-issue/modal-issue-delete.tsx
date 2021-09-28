import React from 'react';
import { observer } from 'mobx-react-lite';
import { message } from 'antd';
import { Modal } from '@client/components/shared/modal/modal';
import { useGameService } from '@client/providers/game-service';

export const ModalIssueDelete: React.FC = observer(() => {
  const { modalState, socketState, gameSocketActions } = useGameService();

  const onCancel = () => {
    modalState.resetDeleteIssue();
  };

  const onOk = async () => {
    if (!modalState.deleteIssue) return;
    await gameSocketActions.deleteIssue(modalState.deleteIssue.id);
    if (socketState.isFail) {
      message.error(socketState.failMessage);
    } else {
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
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(modalState.deleteIssue, null, 2)}
      </pre>
    </Modal>
  );
});