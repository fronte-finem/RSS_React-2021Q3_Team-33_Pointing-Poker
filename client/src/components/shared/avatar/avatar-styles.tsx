import styled from 'styled-components';
import { Avatar as AntAvatar } from 'antd';

export const StyleAvatar = styled(AntAvatar)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #60dabf;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: default;

  .ant-avatar-string {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
