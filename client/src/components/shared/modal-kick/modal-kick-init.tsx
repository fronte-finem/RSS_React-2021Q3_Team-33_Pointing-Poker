import React from 'react';
import { observer } from 'mobx-react-lite';
import { message } from 'antd';
import { Modal } from '@client/components/shared/modal/modal';
import { useGameService } from '@client/providers/game-service';
import { GamePage } from '@client/services/game-state';
import { userFormat } from '@client/components/shared/modal-kick/user-format';
import { Highlight } from './modal-kick.styles';

export const ModalKickInit: React.FC = observer(() => {
  const { gameState, socketState, gameStateActions, gameSocketActions } =
    useGameService();

  const onOk = async () => {
    if (!gameState.kickInit) return;
    await gameSocketActions.kick(gameState.kickInit);
    if (socketState.isFail) {
      message.error(socketState.failMessage);
    }
    gameStateActions.initKickReset();
  };

  const onCancel = () => {
    gameStateActions.initKickReset();
  };

  if (!gameState.kickInit) return null;
  const visible =
    gameState.page !== GamePage.ENTRY && Boolean(gameState.kickInit);
  const whoKick = userFormat(gameStateActions.getUser(gameState.kickInit));

  return (
    <Modal
      okText="Yes"
      cancelText="No"
      title="Kick"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}>
      <p>
        Are you really want to remove player <Highlight>{whoKick}</Highlight>{' '}
        from game session?
      </p>
    </Modal>
  );
});
