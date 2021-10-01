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

export const LogoPosition = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
`;

export const StyledLogoSvg = styled.svg`
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
