import React from 'react';
import { observer } from 'mobx-react-lite';
import { Modal } from '@client/components/shared/modal/modal';
import { useStateService } from '@client/providers/state-service';
import {
  USER_ALLOW_JOIN_ID,
  UserCard,
} from '@client/components/shared/user-card/user-card';

export const ModalAllowJoin = observer(() => {
  const { modalState } = useStateService();

  if (!modalState.allowUserToJoin?.userToJoin) return null;

  const onCancel = () => {
    modalState.allowUserToJoin?.callback(false);
    modalState.resetAllowUserToJoin();
  };

  const onOk = () => {
    modalState.allowUserToJoin?.callback(true);
    modalState.resetAllowUserToJoin();
  };

  return (
    <Modal
      visible={modalState.isAllowUserToJoin}
      title="Allow user to join?"
      okText="Yes"
      cancelText="No"
      onOk={onOk}
      onCancel={onCancel}>
      <UserCard
        user={{
          ...modalState.allowUserToJoin.userToJoin,
          id: USER_ALLOW_JOIN_ID,
        }}
      />
    </Modal>
  );
});
