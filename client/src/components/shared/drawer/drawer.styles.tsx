import styled from 'styled-components';
import { Drawer } from 'antd';

export const StyledDrawer = styled(Drawer)`
  & .ant-drawer-content {
    background-color: ${({ theme }) => theme.content.bg};
  }
`;
