import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';

export const StyledLayout = styled(AntdLayout)`
  min-height: 100vh;
  background: transparent;
`;

export const LayoutContainer = styled.div`
  max-width: var(--page-max-width);
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled(AntdLayout.Content)`
  padding: 20px;
  background: ${({ theme }) => theme.content.bg};
  box-shadow: ${({ theme }) => theme.content.shadow};
  z-index: 1;
`;

export const ContentLayoutContainer = styled(LayoutContainer)`
  background: ${({ theme }) => theme.content.bg};
`;
