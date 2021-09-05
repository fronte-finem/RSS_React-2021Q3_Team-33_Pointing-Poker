import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';

const StyledButton = styled(AntButton)`
  background-color: ${(props) =>
    props.type === 'default' ? 'transparent' : props.theme.buttonColor};
  color: ${(props) =>
    props.type === 'default'
      ? props.theme.buttonColor
      : props.theme.fontButtonColor};
  border: 1px solid ${(props) => props.theme.buttonColor};
  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  box-sizing: border-box;
  border-radius: 3px;
  height: 47px;
  min-width: 186px;
  font-size: 24px;

  &:hover,
  &:active {
    background-color: ${(props) =>
      props.type === 'default'
        ? props.theme.fontButtonColor
        : props.theme.buttonHover};
    color: ${(props) =>
      props.type === 'default' ? props.theme.buttonHover : props.theme.bg};
    border: 1px solid ${(props) => props.theme.buttonHover};
  }

  &:focus {
    background-color: ${(props) =>
      props.type === 'default'
        ? props.theme.fontButtonColor
        : props.theme.buttonColor};
    color: ${(props) =>
      props.type === 'default'
        ? props.theme.buttonColor
        : props.theme.fontButtonColor};
    border: 1px solid ${(props) => props.theme.buttonColor};
  }
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};
