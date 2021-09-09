import React from 'react';
import { Input as AntInput, InputProps } from 'antd';
import styled from 'styled-components';

const StyledInput = styled(AntInput)`
  border: 1px solid ${(props) => props.theme.componentColor};
  border-radius: 0px 0px 0px 10px;
  background: transparent;
  color: ${(props) => props.theme.componentColor};
  font-size: 24px;
`;

export const Input: React.FC<InputProps> = (props) => {
  const { size } = props;
  return <StyledInput size={size} {...props} />;
};
