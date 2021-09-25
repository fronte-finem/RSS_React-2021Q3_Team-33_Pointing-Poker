import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { Issue } from '@shared/api-types/issue';
import { Tooltip } from 'antd';
import {
  StyledCancelIcon,
  StyledMark,
  StyledDangerButton,
  StyledDefaultButton,
  StyledDeleteIcon,
  StyledEditIcon,
  StyledIssuePriority,
  StyledIssueTitle,
  StyledIssueCardControls,
  StyledIssueCardInfo,
  StyleIssueCard,
} from './issue-card-styles';

export interface IssueProps {
  issue: Issue;
}

export const IssueCard: React.FC<IssueProps> = observer(({ issue }) => {
  const { gameState, modalState } = useStateService();

  const isCurrent = gameState.isModeGame && gameState.roundIssueId === issue.id;

  const editIssue = () => {
    modalState.initEditIssue(issue);
  };

  const deleteIssue = () => {
    modalState.initDeleteIssue(issue);
  };

  const editIcon = <StyledEditIcon />;
  const deleteIcon = <StyledDeleteIcon />;
  const cancelIcon = <StyledCancelIcon rotate={45} />;

  const mark = isCurrent ? <StyledMark>Current</StyledMark> : null;

  const editBtn = gameState.isModeLobbyDealer ? (
    <StyledDefaultButton type="link" icon={editIcon} onClick={editIssue} />
  ) : null;

  return (
    <StyleIssueCard isCurrent={isCurrent}>
      <Tooltip placement="bottom" title={issue.link}>
        <StyledIssueCardInfo>
          {mark}
          <StyledIssueTitle>{issue.title}</StyledIssueTitle>
          <StyledIssuePriority>{issue.priority}</StyledIssuePriority>
        </StyledIssueCardInfo>
      </Tooltip>
      {gameState.isDealer ? (
        <StyledIssueCardControls>
          {editBtn}
          <StyledDangerButton
            type="link"
            icon={gameState.isModeGame ? cancelIcon : deleteIcon}
            onClick={deleteIssue}
          />
        </StyledIssueCardControls>
      ) : null}
    </StyleIssueCard>
  );
});
