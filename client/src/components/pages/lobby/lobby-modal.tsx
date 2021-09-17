import { Input } from '@client/components/shared/input/input';
import { Modal } from '@client/components/shared/modal/modal';
import { useGameService } from '@client/providers/game-service';
import React, { ChangeEvent, useState } from 'react';

interface LobbyEditTitleModalProps {
  setEditModal: (isShow: boolean) => void;
  visible: boolean;
}

export const LobbyEditTitleModal: React.FC<LobbyEditTitleModalProps> = (
  props
) => {
  const { setEditModal, visible } = props;
  const { gameState, gameSocketActions } = useGameService();
  const [titleValue, setTitleValue] = useState(gameState.title);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitleValue(value);
  };

  const takeTitleChanges = () => {
    gameSocketActions.changeGameTitle(titleValue);
    setEditModal(false);
  };

  const cancelTitleChanges = () => {
    setTitleValue(gameState.title);
    setEditModal(false);
  };

  return (
    <Modal
      content={
        <Input type="text" value={titleValue} onChange={handleTitleChange} />
      }
      title="edit modal"
      okText="Edit"
      onOk={takeTitleChanges}
      onCancel={cancelTitleChanges}
      cancelText="Cancel"
      visible={visible}
    />
  );
};
