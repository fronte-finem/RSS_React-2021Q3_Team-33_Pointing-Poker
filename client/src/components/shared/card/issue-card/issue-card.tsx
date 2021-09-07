import React from 'react';
import { Card as AntCard, Button as AntButton } from 'antd';
import styled from 'styled-components';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

interface IssueProps {
  title: string;
  priority: string;
  isGame: boolean;
  isCurrent: boolean;
}

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

const StyleIssueCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyleButton = styled(AntButton)`
  margin-left: auto;
  margin-right: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const StyleCancelIcon = styled(PlusOutlined)`
  font-size: 56px;
  color: #636363;
`;

const StyleEditIcon = styled(EditOutlined)`
  font-size: 42px;
  color: #636363;
`;

const StyleDeleteIcon = styled(DeleteOutlined)`
  font-size: 39px;
  color: #ff0000;
`;

const StyleEditIssueWrapper = styled.div`
  margin-left: auto;
  margin-right: -15px;
  width: 100%;
  max-width: 137px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleCurrentIssue = styled.p`
  position: absolute;
  top: -10px;
  left: 5px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000;
`;

const StyleIssueTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
`;

const StyleIssueText = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
`;

const editIssue = () => {
  // TODO add edit issue
};

const deleteIssue = () => {
  // TODO add delete issue
};

const EditIssue: React.FC = () => {
  return (
    <StyleEditIssueWrapper>
      <StyleButton type="link" icon={<StyleEditIcon />} onClick={editIssue} />
      <StyleButton
        type="link"
        icon={<StyleDeleteIcon />}
        onClick={deleteIssue}
      />
    </StyleEditIssueWrapper>
  );
};

export const IssueCard: React.FC<IssueProps> = (props) => {
  const { title, priority, isGame, isCurrent } = props;
  return (
    <StyleIssueCard>
      <StyleIssueCardWrapper>
        {isGame && isCurrent ? (
          <StyleCurrentIssue>Current</StyleCurrentIssue>
        ) : (
          ''
        )}
        <StyleIssueTitle>{title}</StyleIssueTitle>
        <StyleIssueText>{priority}</StyleIssueText>
      </StyleIssueCardWrapper>
      {isGame ? (
        <StyleButton
          type="link"
          icon={<StyleCancelIcon rotate={45} onClick={deleteIssue} />}
        />
      ) : (
        <EditIssue />
      )}
    </StyleIssueCard>
  );
};
