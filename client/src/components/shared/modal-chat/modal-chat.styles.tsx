import styled from 'styled-components';
import { Modal } from '@client/components/shared/modal/modal';
import { CloseCircleFilled } from '@ant-design/icons';

export const StyledModal = styled(Modal)`
  --bg: ${({ theme }) => theme.chat.modal.bg};

  .ant-modal-title,
  .ant-modal-content {
    background-color: var(--bg);
  }

  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-close-x {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledFrame = styled.div`
  position: relative;
  margin-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 10px 0 #0004;
    pointer-events: none;
  }
`;

export const StyledChatContainer = styled.div`
  height: 60vh;
  overflow: auto;
  padding: 10px;
`;

export const StyledChatEnd = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
`;

export const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledCloseIcon = styled(CloseCircleFilled)`
  font-size: 30px;
`;
