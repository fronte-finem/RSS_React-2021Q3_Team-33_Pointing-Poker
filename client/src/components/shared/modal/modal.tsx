import React from 'react';
import { ModalProps } from 'antd';
import { Button } from '@client/components/shared/button/button';
import { StyledModal } from './modal.styles';

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  const { title, onOk, onCancel, okText, cancelText } = props;

  const footer = [
    <Button onClick={onOk} key="ok-modal-btn">
      {okText}
    </Button>,
    <Button type="default" onClick={onCancel} key="cancel-modal-btn">
      {cancelText}
    </Button>,
  ];

  return (
    <StyledModal
      title={title}
      footer={footer}
      closable={false}
      maskStyle={{ background: '#000c', backdropFilter: 'blur(5px)' }}
      zIndex={1000}
      {...props}>
      {children}
    </StyledModal>
  );
};
