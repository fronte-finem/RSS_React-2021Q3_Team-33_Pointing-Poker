import React from 'react';
import { observer } from 'mobx-react-lite';
import { Modal } from '@client/components/shared/modal/modal';
import { useStateService } from '@client/providers/state-service';
import { Highlight } from './modal-kick.styles';

export const ModalKick: React.FC = observer(() => {
  const { modalState, gameState, socketState } = useStateService();

  const makeVote = async (vote: boolean) => {
    await socketState.kickVote(vote);
    modalState.resetKickVote();
  };

  const onYes = () => makeVote(true);
  const onNo = () => makeVote(false);

  return (
    <Modal
      visible={!gameState.isModeEntry && modalState.isKickVoteActive}
      title="Kick player?"
      okText="Yes"
      cancelText="No"
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
