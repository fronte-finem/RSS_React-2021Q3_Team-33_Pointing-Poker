import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';

type Props = ThemedStyledProps<ButtonProps, DefaultTheme>;

const selector = ({ theme, type }: Props) =>
  type === 'default' ? theme.button.default : theme.button.primary;

export const StyledButton = styled(AntButton)`
  box-sizing: border-box;
  border-radius: 10px;
  min-width: 186px;
  height: 47px;

  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  font-size: 24px;

  &&,
  &&:focus {
    background-color: ${(props) => selector(props).bg.normal};
    color: ${(props) => selector(props).fg.normal};
    border: 1px solid ${(props) => props.theme.button.primary.bg.normal};
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &&:hover {
    background-color: ${(props) => selector(props).bg.hover};
    color: ${(props) => selector(props).fg.hover};
    border: 1px solid ${(props) => props.theme.button.primary.bg.hover};
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
  }

  &&:active {
    background-color: ${(props) => selector(props).bg.active};
    color: ${(props) => selector(props).fg.active};
    border: 1px solid ${(props) => props.theme.button.primary.bg.active};
    box-shadow: none;
  }

  &&:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const StyledButtonInput = styled(AntButton)`
  box-sizing: border-box;
  border-radius: 0px 10px 10px 0px;
  min-width: 186px;
  height: 47px;

  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  font-size: 24px;

  &&,
  &&:focus {
    background-color: ${(props) => selector(props).bg.normal};
    color: ${(props) => selector(props).fg.normal};
    border: 1px solid ${({ theme }) => theme.button.primary.bg.normal};
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &&:hover {
    background-color: ${(props) => selector(props).bg.hover};
    color: ${(props) => selector(props).fg.hover};
    border: 1px solid ${({ theme }) => theme.button.primary.bg.hover};
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
  }

  &&:active {
    background-color: ${(props) => selector(props).bg.active};
    color: ${(props) => selector(props).fg.active};
    border: 1px solid ${({ theme }) => theme.button.primary.bg.active};
    box-shadow: none;
  }

  &&:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
