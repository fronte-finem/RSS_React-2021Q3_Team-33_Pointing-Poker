import React from 'react';
import { observer } from 'mobx-react-lite';
import { message } from 'antd';
import { Modal } from '@client/components/shared/modal/modal';
import { useGameService } from '@client/providers/game-service';
import { Highlight } from './modal-kick.styles';

export const ModalKickInit: React.FC = observer(() => {
  const { gameState, socketState, gameStateActions, gameSocketActions } =
    useGameService();

  const onOk = async () => {
    if (!gameState.kickInit) return;
    await gameSocketActions.kick(gameState.kickInit);
    gameStateActions.initKickReset();
    if (socketState.isFail) {
      message.error(socketState.failMessage);
    }
  };

  const onCancel = () => {
    gameStateActions.initKickReset();
  };

  if (!gameStateActions.isKickInit || !gameState.kickInit) return null;

  return (
    <Modal
      okText="Yes"
      cancelText="No"
      title="Kick"
      visible={gameStateActions.isKickInit}
      onOk={onOk}
      onCancel={onCancel}>
      <p>
        Are you really want to remove player{' '}
        <Highlight>{gameStateActions.formatUser(gameState.kickInit)}</Highlight>{' '}
        from game session?
      </p>
    </Modal>
  );
});
