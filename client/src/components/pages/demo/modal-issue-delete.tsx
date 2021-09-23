import React, { useEffect } from 'react';
import { useStateService } from '@client/providers/state-service';
import { ModalIssueDelete } from '@client/components/shared/modal-issue/modal-issue-delete';
import { Priority } from '@shared/api-types/issue';

export const ModalIssueDeleteDemo: React.FC = () => {
  const { modalState } = useStateService();

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
