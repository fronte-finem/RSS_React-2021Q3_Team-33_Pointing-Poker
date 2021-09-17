import React from 'react';
import { Modal as AntModal, ModalFuncProps } from 'antd';
import styled from 'styled-components';
import { Button } from '../button/button';

const StyledModal = styled(AntModal)`
  &.ant-modal {
    width: 875px !important;
  }
  .ant-modal-content {
    background-color: ${(props) => props.theme.bg};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    text-align: center;
  }

  .ant-modal-header {
    border: 0;
    background-color: ${(props) => props.theme.bg};
    padding: 0;
  }
  .ant-modal-title {
    font-size: 64px;
    line-height: 75px;
    color: ${(props) => props.theme.componentColor};
  }
  .ant-modal-body {
    padding: 20px 0;
    font-size: 24px;
    line-height: 30px;
    color: ${(props) => props.theme.componentColor};
  }
  .ant-modal-footer {
    border: 0;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;

export const Modal: React.FC<ModalFuncProps> = (props) => {
  const { title, onOk, onCancel, okText, cancelText, content } = props;
  const footer = [
    <Button onClick={onOk} key="ok-modal-btn">
      {okText}
    </Button>,
    <Button type="default" onClick={onCancel} key="cancel-modal-btn">
      {cancelText}
    </Button>,
  ];

  return (
    <StyledModal title={title} footer={footer} closable={false} {...props}>
      {content}
    </StyledModal>
  );
};
