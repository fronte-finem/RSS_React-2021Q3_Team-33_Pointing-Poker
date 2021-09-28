import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import { fontButton } from '@client/themes/typography';
import { shadowHover, shadowMain, shadowNone } from '@client/themes/shadows';

type Props = ThemedStyledProps<ButtonProps, DefaultTheme>;

const selector = ({ theme, type }: Props) =>
  type === 'default' ? theme.button.default : theme.button.primary;

export const StyledButton = styled(AntButton)`
  box-sizing: border-box;
  border-radius: 10px;
  min-width: 186px;
  height: 47px;
  ${fontButton}

  &&,
  &&:focus {
    background-color: ${(props) => selector(props).bg.normal};
    color: ${(props) => selector(props).fg.normal};
    border: 1px solid ${(props) => props.theme.button.primary.bg.normal};

    ${shadowMain}
  }

  &&:hover {
    background-color: ${(props) => selector(props).bg.hover};
    color: ${(props) => selector(props).fg.hover};
    border: 1px solid ${(props) => props.theme.button.primary.bg.hover};

    ${shadowHover}
  }

  &&:active {
    background-color: ${(props) => selector(props).bg.active};
    color: ${(props) => selector(props).fg.active};
    border: 1px solid ${(props) => props.theme.button.primary.bg.active};

    ${shadowNone}
  }

  &&:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
