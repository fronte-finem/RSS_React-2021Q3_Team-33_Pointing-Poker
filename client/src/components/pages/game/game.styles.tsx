import styled from 'styled-components';
import { StyledDrawer } from '@client/components/shared/drawer/drawer.styles';

export const Page = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const IssuesDrawer = styled(StyledDrawer)`
  z-index: 100;
  & .ant-drawer-body {
    padding: 0;
  }
`;
