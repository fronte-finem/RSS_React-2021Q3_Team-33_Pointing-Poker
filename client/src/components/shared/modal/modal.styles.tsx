import styled from 'styled-components';
import { Modal as AntModal } from 'antd';
import { shadowMain } from '@client/themes/shadows';
import { fontText, fontTitle } from '@client/themes/typography';

export const StyledModal = styled(AntModal)`
  &.ant-modal {
    width: 875px !important;
  }

  .ant-modal-content {
    background-color: ${({ theme }) => theme.modal.bg};
    ${shadowMain};
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
    ${fontTitle};
    font-size: 64px;
    line-height: 75px;
    color: ${({ theme }) => theme.modal.title};
  }

  .ant-modal-body {
    padding: 20px 0;
    ${fontText};
    font-size: 24px;
    line-height: 30px;
    color: ${({ theme }) => theme.modal.fg};
  }

  .ant-modal-footer {
    border: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    padding: 0;
  }

  &&&& .ant-modal-footer .ant-btn {
    margin: 0;
  }
`;
