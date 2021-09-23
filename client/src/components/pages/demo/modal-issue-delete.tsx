import React, { useEffect } from 'react';
import { useGameService } from '@client/providers/game-service';
import { ModalIssueDelete } from '@client/components/shared/modal-issue/modal-issue-delete';
import { Priority } from '@shared/api-types/issue';

export const ModalIssueDeleteDemo: React.FC = () => {
  const { modalState } = useGameService();

  useEffect(() => {
    modalState.initDeleteIssue({
      id: '123',
      title: 'qwerty',
      link: 'https://qwerty.dev',
      priority: Priority.MIDDLE,
    });
  }, []);

  return <ModalIssueDelete />;
};
