import React from 'react';
import {
  StyleAddIcon,
  StyledIssueButtonCard,
  StyledIssueButtonCardControls,
  StyledIssueButtonCardInfo,
  StyleIssueTitle,
} from './issue-button-styles';

export const IssueButton: React.FC = () => {
  const addIssue = () => {}; // TODO add issue

  return (
    <StyledIssueButtonCard onClick={addIssue}>
      <StyledIssueButtonCardInfo>
        <StyleIssueTitle>Create new Issue</StyleIssueTitle>
      </StyledIssueButtonCardInfo>
      <StyledIssueButtonCardControls>
        <StyleAddIcon />
      </StyledIssueButtonCardControls>
    </StyledIssueButtonCard>
  );
};
