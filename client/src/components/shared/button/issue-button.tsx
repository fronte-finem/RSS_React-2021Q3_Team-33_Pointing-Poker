import React from 'react';
import { Card as AntCard, Button as AntButton } from 'antd';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

const StyleIssueCard = styled(AntCard)`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;

  .ant-card-body {
    margin: 0;
    padding: 19px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyleIssueTitle = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
`;

const StyleButton = styled(AntButton)`
  margin-left: auto;
  margin-right: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const StyleAddIcon = styled(PlusOutlined)`
  font-size: 56px;
  color: #636363;
`;

const addIssue = () => {
  // TODO add issue
};

export const IssueButton: React.FC = () => {
  return (
    <StyleIssueCard>
      <StyleIssueTitle>Create new Issue</StyleIssueTitle>
      <StyleButton type="link" icon={<StyleAddIcon />} onClick={addIssue} />
    </StyleIssueCard>
  );
};
