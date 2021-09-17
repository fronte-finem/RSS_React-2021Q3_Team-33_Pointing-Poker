import React from 'react';
import { ModalFuncProps } from 'antd';
import { Button } from '@client/components/shared/button/button';
import { StyledModal } from './modal.styles';

export const Modal: React.FC<ModalFuncProps> = ({ children, ...props }) => {
  const { title, onOk, onCancel, okText, cancelText } = props;

  const footer = [
    <Button onClick={onOk}>{okText}</Button>,
    <Button type="default" onClick={onCancel}>
      {cancelText}
    </Button>,
  ];

  return (
    <StyledModal title={title} footer={footer} closable={false} {...props}>
      {children}
    </StyledModal>
  );
};
