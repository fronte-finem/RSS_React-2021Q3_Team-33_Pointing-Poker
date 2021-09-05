import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';

const StyledButton = styled(AntButton)`
  background-color: ${(props) =>
    props.type === 'default' ? 'transparent' : props.theme.componentColor};
  color: ${(props) =>
    props.type === 'default'
      ? props.theme.componentColor
      : props.theme.fontComponentColor};
  border: 1px solid ${(props) => props.theme.componentColor};
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
        ? props.theme.fontComponentColor
        : props.theme.componentHover};
    color: ${(props) =>
      props.type === 'default' ? props.theme.componentHover : props.theme.bg};
    border: 1px solid ${(props) => props.theme.componentHover};
  }

  &:focus {
    background-color: ${(props) =>
      props.type === 'default'
        ? props.theme.fontComponentColor
        : props.theme.componentColor};
    color: ${(props) =>
      props.type === 'default'
        ? props.theme.componentColor
        : props.theme.fontComponentColor};
    border: 1px solid ${(props) => props.theme.componentColor};
  }
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};
