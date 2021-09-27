import styled from 'styled-components';
import { Select as AntSelect } from 'antd';

export const StyledSelect = styled(AntSelect)`
  width: 267px;
  font-size: 24px;
  text-align: left;

  color: ${({ theme }) => theme.select.fg};
`;

export const StyledOption = styled(AntSelect.Option)`
  width: 267px;
  font-size: 24px;
  text-align: left;
`;
