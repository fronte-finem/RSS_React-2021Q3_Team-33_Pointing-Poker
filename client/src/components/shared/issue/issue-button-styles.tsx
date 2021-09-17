import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const StyleIssueTitle = styled.p`
  margin: 0;
  padding: 6px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 28px;
  line-height: 30px;
  color: #000000;
`;

export const StyleButton = styled(AntButton)`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const StyleAddIcon = styled(PlusOutlined)`
  font-size: 33px;
  color: #636363;
`;
