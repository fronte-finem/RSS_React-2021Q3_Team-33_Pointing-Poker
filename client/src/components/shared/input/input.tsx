import React from 'react';
import { InputProps } from 'antd';
import { StyledInput } from '@client/components/shared/input/input.styles';

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};
