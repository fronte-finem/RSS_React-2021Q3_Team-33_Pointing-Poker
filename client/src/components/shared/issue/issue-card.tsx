import React from 'react';
import { observer } from 'mobx-react-lite';
import { Tooltip, TooltipProps } from 'antd';
import { useStateService } from '@client/providers/state-service';
import { Issue } from '@shared/api-types/issue';
import {
  StyledButtonText,
  StyledCancelIcon,
  StyledDangerButton,
  StyledDefaultButton,
  StyledDeleteIcon,
  StyledEditIcon,
  StyledIssueCardControls,
  StyledIssueCardInfo,
  StyledIssuePriority,
  StyledIssueTitle,
  StyledMark,
  StyledRestartIcon,
  StyledRunIcon,
  StyledStopIcon,
  StyleIssueCard,
} from './issue-card-styles';

const ZeroDelayTooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <Tooltip {...props} placement="top" mouseEnterDelay={0} mouseLeaveDelay={0}>
      {children}
    </Tooltip>
  );
};

export interface IssueProps {
  issue?: Issue;
  className?: string;
  controls?: boolean;
}

export const IssueCard = observer(function IssueCard({
  issue,
  className,
  controls,
}: IssueProps) {
  const { gameState, modalState, socketState } = useStateService();

  if (!issue) return null;

  const isCurrent = gameState.isModeGame && gameState.roundIssueId === issue.id;
  const isHaveStats = gameState.isHaveStats(issue.id);
  const isGameRoundRunning = gameState.isModeGameDealer && gameState.roundRun;
  const isGameRoundStopped = gameState.isModeGameDealer && !gameState.roundRun;

  const isStop = isGameRoundRunning && isCurrent;
  const isRun = isGameRoundStopped && !isHaveStats;
  const isRestart = isGameRoundStopped && isHaveStats;

  const editIssue = () => {
    modalState.initEditIssue(issue);
  };

  const deleteIssue = () => {
    modalState.initDeleteIssue(issue);
  };

  const processRound = () => {
    if (isRun || isRestart) {
      socketState.startRound(issue.id).then(null);
    } else if (isStop) {
      socketState.endRound().then(null);
    }
  };

  const editIcon = <StyledEditIcon />;
  const deleteIcon = <StyledDeleteIcon />;
  const cancelIcon = <StyledCancelIcon rotate={45} />;

  const runIcon = <StyledRunIcon />;
  const restartIcon = <StyledRestartIcon />;
  const stopIcon = <StyledStopIcon />;

  let processIcon = isRun ? runIcon : null;
  processIcon = isRestart ? restartIcon : processIcon;
  processIcon = isStop ? stopIcon : processIcon;

  let processTitle = isRun ? 'Run round' : undefined;
  processTitle = isRestart ? 'Restart round' : processTitle;
  processTitle = isStop ? 'Stop round' : processTitle;

  const mark = isCurrent ? <StyledMark>Current</StyledMark> : null;

  const editBtn = gameState.isModeLobbyDealer ? (
    <StyledDefaultButton type="link" icon={editIcon} onClick={editIssue}>
      <StyledButtonText>Edit</StyledButtonText>
    </StyledDefaultButton>
  ) : null;

  const deleteBtn = isStop ? null : (
    <StyledDangerButton
      type="link"
      icon={gameState.isModeGame ? cancelIcon : deleteIcon}
      onClick={deleteIssue}>
      <StyledButtonText>Delete</StyledButtonText>
    </StyledDangerButton>
  );

  const processBtn = gameState.isModeGameDealer ? (
    <StyledDefaultButton type="link" icon={processIcon} onClick={processRound}>
      <StyledButtonText>{processTitle}</StyledButtonText>
    </StyledDefaultButton>
  ) : null;

  return (
    <StyleIssueCard
      isCurrent={isCurrent}
      isHaveStats={isHaveStats}
      isGameMode={gameState.isModeGame}
      className={className}>
      <StyledIssueCardInfo>
        {mark}
        <ZeroDelayTooltip title={issue.title}>
          <StyledIssueTitle>{issue.title}</StyledIssueTitle>
        </ZeroDelayTooltip>
        <StyledIssuePriority>{issue.priority}</StyledIssuePriority>
      </StyledIssueCardInfo>
      {controls ? (
        <StyledIssueCardControls>
          {processBtn}
          {editBtn}
          {deleteBtn}
        </StyledIssueCardControls>
      ) : null}
    </StyleIssueCard>
  );
});
