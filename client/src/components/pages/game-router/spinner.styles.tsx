import styled from 'styled-components';
import { Spin } from 'antd';

export const StyledSpinner = styled(Spin)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  margin: 0;
`;
