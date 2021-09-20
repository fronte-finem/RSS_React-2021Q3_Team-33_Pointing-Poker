import React from 'react';
import { InputProps, Input as AntInput } from 'antd';
import { StyledInput } from '@client/components/shared/input/input.styles';

export const Input: React.FC<InputProps> = React.forwardRef<
  AntInput,
  InputProps
>((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});
