import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';

export const StyledLayout = styled(AntdLayout)`
  min-height: 100vh;
  background: transparent;
`;

export const LayoutContainer = styled.div`
  max-width: ${({ theme }) => theme.width.max};
  width: 100%;
  margin: 0 auto;
`;
