import styled from 'styled-components';
import { Modal } from '@client/components/shared/modal/modal';
import { Button } from '@client/components/shared/button/button';

export const StyledModal = styled(Modal)`
  --bg: ${({ theme }) => theme.chat.modal.bg};

  .ant-modal-title,
  .ant-modal-content {
    background-color: var(--bg);
  }
`;

export const StyledFrame = styled.div`
  position: relative;

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

export const StyledFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;

  .ant-form-item {
    margin: 0;
  }
`;

export const StyledButtonSend = styled(Button)`
  min-width: 50px;
`;

export const StyledFailMessage = styled.div`
  color: ${({ theme }) => theme.chat.modal.failMessage};
  text-align: left;
  font-size: 20px;
`;
