import React, { useEffect } from 'react';
import { useStateService } from '@client/providers/state-service';
import { ModalIssueCreate } from '@client/components/shared/modal-issue/modal-issue-create';

export const ModalIssueCreateDemo: React.FC = () => {
  const { modalState } = useStateService();

  useEffect(() => {
    modalState.initCreateIssue();
  }, []);

  return <ModalIssueCreate />;
};
