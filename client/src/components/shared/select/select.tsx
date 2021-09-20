import React from 'react';
import { Select as AntSelect, SelectProps } from 'antd';
import styled from 'styled-components';
import { SelectValue } from 'antd/lib/select';

const StyledSelect = styled(AntSelect)`
  width: 267px;
  font-size: 24px;
  text-align: left;
`;

export const Select: React.FC<SelectProps<SelectValue>> = (props) => {
  return <StyledSelect size="large" {...props} />;
};
