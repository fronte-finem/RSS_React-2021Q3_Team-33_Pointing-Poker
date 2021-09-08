import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const StyleIssueTitle = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
`;

export const StyleButton = styled(AntButton)`
  margin-left: auto;
  margin-right: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const StyleAddIcon = styled(PlusOutlined)`
  font-size: 56px;
  color: #636363;
`;
