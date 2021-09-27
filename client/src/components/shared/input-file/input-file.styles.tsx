import styled from 'styled-components';
import { Upload as AntUpload } from 'antd';
import { Input } from '@client/components/shared/input/input';
import { shadowMain } from '@client/themes/shadows';

export const StyledUpload = styled(AntUpload)`
  .ant-upload {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

export const StyledInput = styled(Input)`
  flex: 1 1 250px;
  text-align: center;

  cursor: pointer;

  &,
  &:focus,
  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.input.bg};
    ${shadowMain};
  }
`;
