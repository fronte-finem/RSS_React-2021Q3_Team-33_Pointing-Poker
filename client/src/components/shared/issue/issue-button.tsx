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

interface Props {
  className?: string;
}

export const IssueButton: React.FC<Props> = observer(({ className }) => {
  const { modalState } = useStateService();

  const onClick = () => {
    modalState.initCreateIssue();
  };

  return (
    <StyledIssueButtonCard onClick={onClick} className={className}>
      <StyledIssueButtonCardInfo>
        <StyleIssueTitle>Create new Issue</StyleIssueTitle>
      </StyledIssueButtonCardInfo>
      <StyledIssueButtonCardControls>
        <StyleAddIcon />
      </StyledIssueButtonCardControls>
    </StyledIssueButtonCard>
  );
});
