import styled from 'styled-components';
import { Layout } from 'antd';
import { LayoutContainer } from '@client/components/app/layout/layout.style';
import { shadowMedium } from '@client/themes/shadows';

export const StyledHeader = styled(Layout.Header)`
  height: 80px;
  color: ${({ theme }) => theme.header.fg};
  background: ${({ theme }) => theme.header.bg};
  z-index: 2;

  ${shadowMedium}
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
