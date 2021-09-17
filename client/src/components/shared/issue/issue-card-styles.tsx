import styled from 'styled-components';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button as AntButton } from 'antd';

export const StyleIssueCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyleButton = styled(AntButton)`
  margin-left: auto;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const StyleCancelIcon = styled(PlusOutlined)`
  font-size: 33px;
  color: #636363;
`;

export const StyleEditIcon = styled(EditOutlined)`
  font-size: 25px;
  color: #636363;
`;

export const StyleDeleteIcon = styled(DeleteOutlined)`
  font-size: 23px;
  color: #ff0000;
`;

export const StyleEditIssueWrapper = styled.div`
  margin-left: auto;
  margin-right: -10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyleCurrentIssue = styled.p`
  position: absolute;
  top: -10px;
  left: 5px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000;
`;

export const StyleIssueTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 28px;
  line-height: 30px;
  color: #000000;
`;

export const StyleIssueText = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
`;
