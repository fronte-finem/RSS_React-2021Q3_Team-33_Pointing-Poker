import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import {
  StyleAddIcon,
  StyledIssueButtonCard,
  StyledIssueButtonCardControls,
  StyledIssueButtonCardInfo,
  StyleIssueTitle,
} from './issue-button-styles';

export const IssueButton = observer(() => {
  const { modalState } = useStateService();

  const onClick = () => {
    modalState.initCreateIssue();
  };

  return (
    <StyledIssueButtonCard onClick={onClick}>
      <StyledIssueButtonCardInfo>
        <StyleIssueTitle>Create new Issue</StyleIssueTitle>
      </StyledIssueButtonCardInfo>
      <StyledIssueButtonCardControls>
        <StyleAddIcon />
      </StyledIssueButtonCardControls>
    </StyledIssueButtonCard>
  );
});
