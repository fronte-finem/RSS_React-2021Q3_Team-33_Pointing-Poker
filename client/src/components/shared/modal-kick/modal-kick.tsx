import React from 'react';
import { observer } from 'mobx-react-lite';
import { message } from 'antd';
import { Modal } from '@client/components/shared/modal/modal';
import { useStateService } from '@client/providers/state-service';
import { GamePage } from '@client/services/game-state';
import { Highlight } from './modal-kick.styles';

export const ModalKick: React.FC = observer(() => {
  const { modalState, gameState, socketState } = useStateService();

  const makeVote = async (vote: boolean) => {
    await socketState.kickVote(vote);
    if (socketState.isFail) {
      message.error(socketState.failMessage);
    }
    modalState.resetKickVote();
  };

  const onYes = () => makeVote(true);
  const onNo = () => makeVote(false);

  const visible =
    gameState.page !== GamePage.ENTRY && modalState.isKickVoteActive;

  return (
    <Modal
      title="Kick player?"
      okText="Yes"
      cancelText="No"
      visible={visible}
      confirmLoading={socketState.isLoading}
      onOk={onYes}
      onCancel={onNo}
      closable>
      <>
        <p>
          <Highlight>
            {gameState.formatUser(modalState.kickVote?.initiatorId)}
          </Highlight>{' '}
          want to kick member{' '}
          <Highlight>
            {gameState.formatUser(modalState.kickVote?.badUserId)}
          </Highlight>
        </p>
        <p>Do you agree with it?</p>
      </>
    </Modal>
  );
});
