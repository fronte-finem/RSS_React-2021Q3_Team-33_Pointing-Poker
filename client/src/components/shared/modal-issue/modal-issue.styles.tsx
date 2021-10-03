import styled from 'styled-components';
import { Select } from '@client/components/shared/select/select';
import { Input } from '@client/components/shared/input/input';
import { Form } from 'antd';
import { fontSubtitle } from '@client/themes/typography';

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

  && label {
    ${fontSubtitle};
    color: ${({ theme }) => theme.modal.title};
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

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
