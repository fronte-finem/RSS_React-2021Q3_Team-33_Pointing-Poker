import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';
import { shadowLarge } from '@client/themes/shadows';

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
  z-index: 1;

  ${shadowLarge}
`;

export const ContentLayoutContainer = styled(LayoutContainer)`
  background: ${({ theme }) => theme.content.bg};
`;
