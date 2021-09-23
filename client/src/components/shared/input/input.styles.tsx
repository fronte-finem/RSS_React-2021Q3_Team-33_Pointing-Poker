import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const StyledInput = styled(AntInput)`
  border-radius: 0 0 0 10px;
  border: 1px solid ${({ theme }) => theme.input.fg};
  background: ${({ theme }) => theme.input.bg};
  color: ${({ theme }) => theme.input.fg};
  box-shadow: ${({ theme }) => theme.input.shadow};
  font-size: 24px;
`;
