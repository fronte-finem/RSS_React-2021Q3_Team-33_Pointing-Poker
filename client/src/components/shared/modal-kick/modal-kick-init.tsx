import React from 'react';
import { observer } from 'mobx-react-lite';
import { message } from 'antd';
import { Modal } from '@client/components/shared/modal/modal';
import { useGameService } from '@client/providers/game-service';
import { GamePage } from '@client/services/game-state';
import { Highlight } from './modal-kick.styles';

export const ModalKickInit: React.FC = observer(() => {
  const {
    modalState,
    gameState,
    socketState,
    gameStateActions,
    gameSocketActions,
  } = useGameService();

  const onCancel = () => {
    modalState.resetKickUser();
  };

  const onOk = async () => {
    if (!modalState.kickUser) return;
    await gameSocketActions.kick(modalState.kickUser);
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
        <Highlight>
          {gameStateActions.formatUser(modalState.kickUser)}
        </Highlight>{' '}
        from game session?
      </p>
    </Modal>
  );
});
