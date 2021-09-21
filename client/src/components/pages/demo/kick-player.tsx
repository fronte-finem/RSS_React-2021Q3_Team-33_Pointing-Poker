import { ModalKickMember } from '@client/components/shared/modal-kick-member/modal-kick-member';
import React, { useState } from 'react';

export const KickPlayer: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ModalKickMember
      visible={isModalVisible}
      member="David Blane"
      onCancel={closeModal}
      onOK={closeModal}
    />
  );
};
