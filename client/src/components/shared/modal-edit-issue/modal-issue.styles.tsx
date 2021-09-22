import styled from 'styled-components';
import { Select } from '@client/components/shared/select/select';
import { Input } from '@client/components/shared/input/input';
import { Form } from 'antd';

export const StyledWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledFormItem = styled(Form.Item)`
  align-items: center;
  margin: 0;

  label {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const StyledInput = styled(Input)`
  border-radius: 0;
`;

export const StyledSelect = styled(Select)`
  display: block;
  text-transform: capitalize;
  && {
    max-width: 150px;
    margin-right: auto;
  }
`;
