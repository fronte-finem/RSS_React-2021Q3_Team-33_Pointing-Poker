import React from 'react';
import { Input as AntInput } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';

const StyledInput = styled(AntInput)`
  border: 1px solid ${(props) => props.theme.componentColor};
  border-radius: 0px 0px 0px 10px;
  background: transparent;
  color: ${(props) => props.theme.componentColor};
`;

export const Input: React.FC<ButtonProps> = (props) => {
  const { size } = props;
  return <StyledInput size={size} {...props} />;
};
