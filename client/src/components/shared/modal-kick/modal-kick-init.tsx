import React from 'react';
import { observer } from 'mobx-react-lite';
import { Modal } from '@client/components/shared/modal/modal';
import { useStateService } from '@client/providers/state-service';
import { Highlight } from './modal-kick.styles';

export const ModalKickInit: React.FC = observer(() => {
  const { modalState, gameState, socketState } = useStateService();

  const onCancel = () => {
    modalState.resetKickUser();
  };

  const onOk = async () => {
    if (!modalState.kickUser) return;
    await socketState.kick(modalState.kickUser);
    if (!socketState.isFail) {
      onCancel();
    }
  };

  if (!modalState.kickUser) return null;

  return (
    <Modal
      visible={!gameState.isModeEntry && modalState.isKickUserActive}
      title="Start kick?"
      okText="Yes"
      cancelText="No"
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
