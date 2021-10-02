import React, { ChangeEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Input } from '@client/components/shared/input/input';
import { Modal } from '@client/components/shared/modal/modal';
import { useStateService } from '@client/providers/state-service';
import { message } from 'antd';

interface LobbyEditTitleModalProps {
  isVisible: boolean;
  setIsVisible: (isShow: boolean) => void;
}

export const LobbyEditTitleModal: React.FC<LobbyEditTitleModalProps> = observer(
  ({ isVisible, setIsVisible }) => {
    const { gameState, socketState } = useStateService();
    const [titleValue, setTitleValue] = useState(gameState.title);

    useEffect(() => {
      setTitleValue(gameState.title);
    }, [gameState.title]);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setTitleValue(value);
    };

    const takeTitleChanges = async () => {
      await socketState.changeGameTitle(titleValue);
      if (socketState.isFail) {
        message.error(socketState.failMessage);
      } else {
        setIsVisible(false);
      }
    };

    const cancelTitleChanges = () => {
      if (socketState.isLoading) return;
      setIsVisible(false);
      setTitleValue(gameState.title);
    };

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
        <Input type="text" value={titleValue} onChange={handleTitleChange} />
      </Modal>
    );
  }
);
