import styled from 'styled-components';
import { Modal as AntModal } from 'antd';

export const StyledModal = styled(AntModal)`
  &.ant-modal {
    width: 875px !important;
  }

  .ant-modal-content {
    background-color: ${({ theme }) => theme.modal.bg};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    text-align: center;
  }

  .ant-modal-header {
    border: 0;
    background-color: ${({ theme }) => theme.modal.bg};
    padding: 0;
    text-transform: capitalize;
  }

  .ant-modal-title {
    font-size: 64px;
    line-height: 75px;
    color: ${({ theme }) => theme.modal.fg};
  }

  .ant-modal-body {
    padding: 20px 0;
    font-size: 24px;
    line-height: 30px;
    color: ${({ theme }) => theme.modal.fg};
  }

  .ant-modal-footer {
    border: 0;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;
