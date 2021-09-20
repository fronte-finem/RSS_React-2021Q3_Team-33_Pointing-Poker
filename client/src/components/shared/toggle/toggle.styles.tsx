import styled from 'styled-components';
import { Switch } from 'antd';

export const StyledSwitch = styled(Switch)`
  &.ant-switch {
    background-color: ${({ theme }) => theme.toggle.unchecked};
  }
  &.ant-switch-checked {
    background-color: ${({ theme }) => theme.toggle.checked};
  }
`;
