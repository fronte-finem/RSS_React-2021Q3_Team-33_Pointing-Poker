import React, { useEffect } from 'react';
import { useGameService } from '@client/providers/game-service';
import { ModalIssueEdit } from '@client/components/shared/modal-issue/modal-issue-edit';
import { Priority } from '@shared/api-types/issue';

export const ModalIssueEditDemo: React.FC = () => {
  const { modalState } = useGameService();

  useEffect(() => {
    modalState.initEditIssue({
      id: '123',
      title: 'qwerty',
      link: 'https://qwerty.dev',
      priority: Priority.MIDDLE,
    });
  }, []);

  return <ModalIssueEdit />;
};
