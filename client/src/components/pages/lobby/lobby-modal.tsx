import { Input } from '@client/components/shared/input/input';
import { Modal } from '@client/components/shared/modal/modal';
import React, { ChangeEvent, useState } from 'react';
// import { StyleLobbyEditTitleForm } from './lobby-info-styles';

interface LobbyEditTitleModalProps {
  setEditModal: (isShow: boolean) => void;
  lobbyTitle: string;
  setLobbyTitle: (title: string) => void;
  visible: boolean;
}

export const LobbyEditTitleModal: React.FC<LobbyEditTitleModalProps> = (
  props
) => {
  const { setEditModal, lobbyTitle, setLobbyTitle, visible } = props;
  const [titleValue, setTitleValue] = useState(lobbyTitle);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitleValue(value);
  };

  const takeTitleChanges = () => {
    setLobbyTitle(titleValue);
    setEditModal(false);
  };

  const cancelTitleChanges = () => {
    setTitleValue(lobbyTitle);
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
