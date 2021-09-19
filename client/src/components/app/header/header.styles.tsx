import styled from 'styled-components';
import { Button as AntButton, Layout } from 'antd';
import { LayoutContainer } from '@client/components/app/layout/layout.style';
import { MessageOutlined } from '@ant-design/icons';

export const StyledHeader = styled(Layout.Header)`
  height: 80px;
  color: ${({ theme }) => theme.header.fg};
  background-color: ${({ theme }) => theme.header.bg};
  background-image: linear-gradient(to bottom, #0002, #0002);
  background-size: 100% 60px;
  background-repeat: no-repeat;
`;

export const HeaderLayoutContainer = styled(LayoutContainer)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 80px;
`;

export const StyledLogoSvg = styled.svg`
  position: absolute;
  top: 24px;
  left: 0;
  width: 80px;
  height: 80px;
  .letter1 {
    fill: ${({ theme }) => theme.header.logo.letter1};
  }
  .letter2 {
    fill: ${({ theme }) => theme.header.logo.letter2};
  }
  .rhombus {
    fill: ${({ theme }) => theme.header.logo.rhombus};
  }
`;

export const StyledControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledChatButton = styled(AntButton)`
  --size: 40px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: var(--size);
  width: var(--size);

  &,
  &:focus {
    color: ${({ theme }) => theme.header.btn.chat.normal};
  }
  &:hover {
    color: ${({ theme }) => theme.header.btn.chat.hover};
  }
  &:active {
    color: ${({ theme }) => theme.header.btn.chat.active};
  }
`;

export const StyledChatButtonIcon = styled(MessageOutlined)`
  font-size: var(--size);
`;

export const StyledChatButtonNum = styled.div`
  --size: 30px;

  position: absolute;
  top: 2px;
  left: 5px;
  height: var(--size);
  width: var(--size);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #fff;

  font-size: 20px;
  color: #000;
`;
