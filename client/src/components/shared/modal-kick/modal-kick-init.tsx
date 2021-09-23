import React from 'react';
import { observer } from 'mobx-react-lite';
import { message } from 'antd';
import { Modal } from '@client/components/shared/modal/modal';
import { useStateService } from '@client/providers/state-service';
import { GamePage } from '@client/services/game-state';
import { Highlight } from './modal-kick.styles';

export const ModalKickInit: React.FC = observer(() => {
  const { modalState, gameState, socketState } = useStateService();

  const onCancel = () => {
    modalState.resetKickUser();
  };

  const onOk = async () => {
    if (!modalState.kickUser) return;
    await socketState.kick(modalState.kickUser);
    if (socketState.isFail) {
      message.error(socketState.failMessage);
    } else {
      onCancel();
    }
  };

  if (!modalState.kickUser) return null;
  const visible =
    gameState.page !== GamePage.ENTRY && modalState.isKickUserActive;

  return (
    <Modal
      title="Start kick?"
      okText="Yes"
      cancelText="No"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={socketState.isLoading}>
      <p>
        Are you really want to remove player{' '}
        <Highlight>{gameState.formatUser(modalState.kickUser)}</Highlight> from
        game session?
      </p>
    </Modal>
  );
});
