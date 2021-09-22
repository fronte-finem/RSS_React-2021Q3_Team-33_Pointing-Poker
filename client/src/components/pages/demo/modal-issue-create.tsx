import React, { useEffect } from 'react';
import { useGameService } from '@client/providers/game-service';
import { ModalIssueCreate } from '@client/components/shared/modal-issue/modal-issue-create';

export const ModalIssueCreateDemo: React.FC = () => {
  const { modalState } = useGameService();

  useEffect(() => {
    modalState.initCreateIssue();
  }, []);

  return <ModalIssueCreate />;
};
