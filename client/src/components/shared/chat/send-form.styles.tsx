import styled from 'styled-components';
import { Button } from '@client/components/shared/button/button';

export const StyledFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;

  .ant-form-item {
    margin: 0;
  }
`;

export const StyledButtonSend = styled(Button)`
  min-width: 50px;
`;
