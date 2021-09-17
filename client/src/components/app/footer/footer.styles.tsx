import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { Layout, Typography } from 'antd';
import { LinkProps } from 'antd/lib/typography/Link';
import { FullInteractiveColors } from 'types/styled';
import { TeamTitle } from '@client/components/app/footer/footer.config';
import { Link } from '@client/components/shared/link/link';
import { LayoutContainer } from '@client/components/app/layout/layout.style';

export const StyledFooter = styled(Layout.Footer)`
  background: ${(props) => props.theme.footer.bg};
  color: ${(props) => props.theme.footer.fg};
`;

type Props = ThemedStyledProps<LinkProps, DefaultTheme> & { team: TeamTitle };

const selector = ({ team, theme }: Props): FullInteractiveColors =>
  team === TeamTitle.MENTOR
    ? theme.footer.team.mentor
    : theme.footer.team.student;

export const LinkCard = styled(Link)<{ team: TeamTitle }>`
  display: block;
  padding: 0 10px 0 0;
  border-radius: 50px;
  white-space: nowrap;
  font-size: 1.2em;

  &&&,
  &&&:focus {
    transition: all 300ms;
    color: ${(props) => selector(props).fg.normal};
    background: ${(props) => selector(props).bg.normal};
  }
  &&&:hover {
    color: ${(props) => selector(props).fg.hover};
    background: ${(props) => selector(props).bg.hover};
  }
  &&&:active {
    color: ${(props) => selector(props).fg.active};
    background: ${(props) => selector(props).bg.active};
  }
`;

export const LogoLink = styled(Link)`
  display: block;

  &&&,
  &&&:focus {
    transition: all 300ms;
    color: ${(props) => props.theme.footer.logo.normal};
  }
  &&&:hover {
    color: ${(props) => props.theme.footer.logo.hover};
  }
  &&&:active {
    color: ${(props) => props.theme.footer.logo.active};
  }
`;

export const FooterLayoutContainer = styled(LayoutContainer)`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledSection = styled.div`
  margin: 0 auto;
`;

export const StyledTitle = styled(Typography.Title)`
  text-align: center;
  && {
    color: ${(props) => props.theme.footer.fg};
  }
`;

export const StyledTime = styled.time`
  display: block;
  margin-top: 0.5em;
  text-align: center;
  font-size: 1.5em;
`;

export const StyledSvg = styled.svg`
  max-width: 200px;
  min-width: 150px;
  width: 100%;
  height: auto;
  fill: currentColor;
`;
