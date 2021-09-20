import { ModalEditIssue } from '@client/components/shared/modal-edit-issue/modal-edit-issue';
import React, { useState } from 'react';

export const EditIssue: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ModalEditIssue
      visible={isModalVisible}
      onCancel={closeModal}
      onOK={closeModal}
      title="issue-13"
      link="http://jira.my-company.com/issue-13"
      priority="Middle"
    />
  );
};