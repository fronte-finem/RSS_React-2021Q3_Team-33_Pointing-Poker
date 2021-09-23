import React from 'react';
import { ButtonProps } from 'antd/lib/button/button';
import {
  StyledButton,
  StyledButtonInput,
} from '@client/components/shared/button/button.styles';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export const ButtonInput: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButtonInput {...props}>{children}</StyledButtonInput>;
};
