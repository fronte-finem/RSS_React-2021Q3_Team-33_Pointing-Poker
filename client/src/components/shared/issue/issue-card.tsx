import React from 'react';
import { StyleIssueCard } from './issue-styles';
import {
  StyleCancelIcon,
  StyleCurrentIssue,
  StyledDangerButton,
  StyledDefaultButton,
  StyleDeleteIcon,
  StyleEditIcon,
  StyleEditIssueWrapper,
  StyleIssueCardWrapper,
  StyleIssueText,
  StyleIssueTitle,
} from './issue-card-styles';

export interface IssueProps {
  title: string;
  priority: string;
  isGame: boolean;
  isCurrent: boolean;
}

const editIssue = () => {
  // TODO add edit issue
};

const deleteIssue = () => {
  // TODO add delete issue
};

const EditIssue: React.FC = () => {
  return (
    <StyleEditIssueWrapper>
      <StyledDefaultButton
        type="link"
        icon={<StyleEditIcon />}
        onClick={editIssue}
      />
      <StyledDangerButton
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
        ) : null}
        <StyleIssueTitle>{title}</StyleIssueTitle>
        <StyleIssueText>{priority}</StyleIssueText>
      </StyleIssueCardWrapper>
      {isGame ? (
        <StyledDangerButton
          type="link"
          icon={<StyleCancelIcon rotate={45} onClick={deleteIssue} />}
        />
      ) : (
        <EditIssue />
      )}
    </StyleIssueCard>
  );
};
