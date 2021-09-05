import React from 'react';
import { Switch, SwitchProps } from 'antd';
import styled from 'styled-components';

const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    background-color: #60dabf;
  }
`;

export const Toggle: React.FC<SwitchProps> = (props) => {
  return <StyledSwitch {...props} />;
};
