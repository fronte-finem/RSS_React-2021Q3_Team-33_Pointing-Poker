import styled from 'styled-components';
import { MessageOutlined, NotificationOutlined } from '@ant-design/icons';
import { Button as AntButton } from 'antd';

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

export const StyledNotificationIcon = styled(NotificationOutlined)`
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
