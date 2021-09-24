import styled from 'styled-components';
import { Form } from 'antd';

export const StyledFormItem = styled(Form.Item)`
  &&& label {
    color: ${({ theme }) => theme.form.fg};
    font-size: 24px;
    font-weight: bold;
  }
`;
