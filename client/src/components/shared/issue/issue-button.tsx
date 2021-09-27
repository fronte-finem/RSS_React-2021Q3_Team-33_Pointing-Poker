import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import {
  StyleAddIcon,
  StyledIssueButtonCard,
  StyledIssueButtonCardControls,
  StyledIssueButtonCardInfo,
  StyleIssueTitle,
} from './issue-button-styles';

export const IssueButton = observer(() => {
  const { modalState } = useGameService();

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
