import styled from 'styled-components';
import { StyledDrawer } from '@client/components/shared/drawer/drawer.styles';

export const ChatDrawer = styled(StyledDrawer)`
  z-index: 100;
  & .ant-drawer-body {
    padding: 0;
  }
  & .ant-drawer-close {
    font-size: 30px;
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
  height: 90vh;
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

export const SendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 20px;
`;
