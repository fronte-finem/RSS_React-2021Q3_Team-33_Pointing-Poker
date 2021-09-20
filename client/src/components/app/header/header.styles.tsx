import styled from 'styled-components';
import { Layout } from 'antd';
import { LayoutContainer } from '@client/components/app/layout/layout.style';

export const StyledHeader = styled(Layout.Header)`
  height: 80px;
  color: ${({ theme }) => theme.header.fg};
  background-color: ${({ theme }) => theme.header.bg};
  background-image: linear-gradient(to bottom, #0002, #0002);
  background-size: 100% 60px;
  background-repeat: no-repeat;
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
