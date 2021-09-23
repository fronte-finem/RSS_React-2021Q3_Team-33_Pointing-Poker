import React, { useEffect } from 'react';
import { useStateService } from '@client/providers/state-service';
import { ModalIssueEdit } from '@client/components/shared/modal-issue/modal-issue-edit';
import { Priority } from '@shared/api-types/issue';

export const ModalIssueEditDemo: React.FC = () => {
  const { modalState } = useStateService();

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
