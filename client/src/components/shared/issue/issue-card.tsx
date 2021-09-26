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
  StyledCheckIcon,
} from './issue-card-styles';

export interface IssueProps {
  issue?: Issue;
  className?: string;
}

export const IssueCard: React.FC<IssueProps> = observer(function IssueCard({
  issue,
  className,
}) {
  const { gameState, modalState } = useStateService();

  if (!issue) return null;

  const isCurrent = gameState.isModeGame && gameState.roundIssueId === issue.id;
  const isHaveStats = gameState.isHaveStats(issue.id);

  const editIssue = () => {
    modalState.initEditIssue(issue);
  };

  const deleteIssue = () => {
    modalState.initDeleteIssue(issue);
  };

  const selectIssue = () => {
    if (!gameState.isModeGame) return;
    modalState.initSelectIssue(issue.id);
  };

  const editIcon = <StyledEditIcon />;
  const deleteIcon = <StyledDeleteIcon />;
  const cancelIcon = <StyledCancelIcon rotate={45} />;

  const okIcon = isHaveStats ? <StyledCheckIcon /> : null;

  const mark = isCurrent ? <StyledMark>Current</StyledMark> : null;

  const editBtn = gameState.isModeLobbyDealer ? (
    <StyledDefaultButton type="link" icon={editIcon} onClick={editIssue} />
  ) : null;

  return (
    <StyleIssueCard
      isCurrent={isCurrent}
      isSelected={modalState.selectIssue === issue.id}
      isHaveStats={isHaveStats}
      isGameMode={gameState.isModeGame}
      className={className}
      onClick={selectIssue}>
      <Tooltip
        placement={gameState.isModeGame ? 'right' : 'bottom'}
        title={issue.link}>
        <StyledIssueCardInfo>
          {mark}
          <StyledIssueTitle>
            {okIcon}
            {issue.title}
          </StyledIssueTitle>
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
