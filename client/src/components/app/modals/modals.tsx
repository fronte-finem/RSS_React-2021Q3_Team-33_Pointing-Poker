import React from 'react';
import { observer } from 'mobx-react-lite';
import { Alert } from 'antd';
import { ModalKickInit } from '@client/components/shared/modal-kick/modal-kick-init';
import { ModalKick } from '@client/components/shared/modal-kick/modal-kick';
import { ModalIssueCreate } from '@client/components/shared/modal-issue/modal-issue-create';
import { ModalIssueEdit } from '@client/components/shared/modal-issue/modal-issue-edit';
import { ModalIssueDelete } from '@client/components/shared/modal-issue/modal-issue-delete';
import { ModalChat } from '@client/components/shared/modal-chat/modal-chat';

export const Modals = observer(() => {
  return (
    <div>
      <Alert.ErrorBoundary>
        <ModalKickInit />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalKick />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalIssueCreate />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalIssueEdit />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalIssueDelete />
      </Alert.ErrorBoundary>

      <Alert.ErrorBoundary>
        <ModalChat />
      </Alert.ErrorBoundary>
    </div>
  );
});
