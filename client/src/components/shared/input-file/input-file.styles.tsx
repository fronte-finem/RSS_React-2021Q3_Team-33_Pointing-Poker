import styled from 'styled-components';
import { Upload as AntUpload } from 'antd';
import { Input } from '@client/components/shared/input/input';

export const StyledUpload = styled(AntUpload)`
  .ant-upload {
    display: flex;
  }
`;

export const StyledInput = styled(Input)`
  width: 275px;
  text-align: center;

  cursor: pointer;

  &,
  &:focus,
  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.input.bg};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
