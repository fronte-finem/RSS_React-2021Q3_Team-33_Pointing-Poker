import React, { ChangeEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Input } from '@client/components/shared/input/input';
import { Modal } from '@client/components/shared/modal/modal';
import { useGameService } from '@client/providers/game-service';

interface LobbyEditTitleModalProps {
  isVisible: boolean;
  setIsVisible: (isShow: boolean) => void;
}

export const LobbyEditTitleModal: React.FC<LobbyEditTitleModalProps> = observer(
  ({ isVisible, setIsVisible }) => {
    const { gameState, gameSocketActions, socketState } = useGameService();
    const [titleValue, setTitleValue] = useState(gameState.title);

    useEffect(() => {
      setTitleValue(gameState.title);
    }, [gameState.title]);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setTitleValue(value);
    };

    const takeTitleChanges = async () => {
      await gameSocketActions.changeGameTitle(titleValue);
      if (!socketState.isFail) setIsVisible(false);
    };

    const cancelTitleChanges = () => {
      if (socketState.isLoading) return;
      setIsVisible(false);
    };

    const form = (
      <>
        <Input type="text" value={titleValue} onChange={handleTitleChange} />
        {socketState.isFail ? <div>socketState.failMessage</div> : null}
      </>
    );

    return (
      <Modal
        title="edit game title"
        okText="Edit"
        okButtonProps={{ disabled: !titleValue }}
        onOk={takeTitleChanges}
        cancelText="Cancel"
        cancelButtonProps={{ disabled: socketState.isLoading }}
        onCancel={cancelTitleChanges}
        visible={isVisible}
        confirmLoading={socketState.isLoading}>
        {form}
      </Modal>
    );
  }
);
