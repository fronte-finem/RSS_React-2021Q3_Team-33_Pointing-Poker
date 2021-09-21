import React from 'react';
import { observer } from 'mobx-react-lite';
import { message } from 'antd';
import { Modal } from '@client/components/shared/modal/modal';
import { useGameService } from '@client/providers/game-service';
import { GamePage } from '@client/services/game-state';
import { Highlight } from './modal-kick.styles';

export const ModalKick: React.FC = observer(() => {
  const { gameState, socketState, gameStateActions, gameSocketActions } =
    useGameService();

  const makeVote = async (vote: boolean) => {
    await gameSocketActions.kickVote(vote);
    if (socketState.isFail) {
      message.error(socketState.failMessage);
    }
  };

  const onOk = () => makeVote(true);
  const onCancel = () => makeVote(false);

  const visible = gameState.page !== GamePage.ENTRY && gameState.kickVoteRun;

  return (
    <Modal
      title="Kick player?"
      okText="Yes"
      cancelText="No"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}>
      <>
        <p>
          <Highlight>{gameStateActions.formatUserWhoInitKick()}</Highlight> want
          to kick member{' '}
          <Highlight>{gameStateActions.formatUserForKick()}</Highlight>
        </p>
        <p>Do you agree with it?</p>
      </>
    </Modal>
  );
});
