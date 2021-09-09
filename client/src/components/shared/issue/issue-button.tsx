import React from 'react';
import { StyleIssueCard } from './issue-styles';
import {
  StyleAddIcon,
  StyleButton,
  StyleIssueTitle,
} from './issue-button-styles';

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
