import { Modal } from '@client/components/shared/modal/modal';
import React from 'react';

interface IProps {
  member: string;
  visible: boolean;
  player?: string;
  onOK?: () => void;
  onCancel?: () => void;
}

export const ModalKickMember: React.FC<IProps> = (props) => {
  const { member, visible, onOK, onCancel, player } = props;
  return (
    <Modal
      okText="Yes"
      cancelText="No"
      title={!player ? 'Kick player?' : 'Kick'}
      visible={visible}
      onOk={onOK}
      onCancel={onCancel}
      content={
        !player ? (
          <p>
            Are you really want to remove player{' '}
            <span style={{ color: '#66999B' }}>{member}</span> from game
            session?
          </p>
        ) : (
          <>
            <p>
              <span style={{ color: '#66999B' }}>{player}</span> want to kick
              member <span style={{ color: '#66999B' }}>{member}</span>
            </p>
            <p>Do you agree with it?</p>
          </>
        )
      }
    />
  );
};
