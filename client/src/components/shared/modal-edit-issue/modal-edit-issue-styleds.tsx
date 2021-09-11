import styled from 'styled-components';
import { Input } from '../input/input';
import { Select } from '../select/select';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 100px;
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledInput = styled(Input)`
  width: 420px;
  border-radius: 0;
`;
export const StyledSelect = styled(Select)`
  margin-right: 153px;
`;
