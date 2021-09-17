import React from 'react';
import { SwitchProps } from 'antd';
import { StyledSwitch } from '@client/components/shared/toggle/toggle.styles';

export const Toggle: React.FC<SwitchProps> = (props) => {
  return <StyledSwitch {...props} />;
};
