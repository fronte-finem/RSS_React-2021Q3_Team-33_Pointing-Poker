import styled from 'styled-components';
import { Avatar as AntAvatar } from 'antd';
import { fontAvatar } from '@client/themes/typography';

export const StyleAvatar = styled(AntAvatar)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ theme }) => theme.avatar.bg};
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: default;

  .ant-avatar-string {
    ${fontAvatar}

    text-align: center;
    color: ${({ theme }) => theme.avatar.fg};
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
