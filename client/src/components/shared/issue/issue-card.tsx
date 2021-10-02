import React from 'react';
import { observer } from 'mobx-react-lite';
import { Tooltip } from 'antd';
import { useStateService } from '@client/providers/state-service';
import { Issue } from '@shared/api-types/issue';
import {
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

export interface IssueProps {
  issue?: Issue;
  className?: string;
}

export const IssueCard: React.FC<IssueProps> = observer(function IssueCard({
  issue,
  className,
}) {
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
    <Tooltip placement="top" title="Edit">
      <StyledDefaultButton type="link" icon={editIcon} onClick={editIssue} />
    </Tooltip>
  ) : null;

  const deleteBtn = isStop ? null : (
    <Tooltip placement="top" title="Delete">
      <StyledDangerButton
        type="link"
        icon={gameState.isModeGame ? cancelIcon : deleteIcon}
        onClick={deleteIssue}
      />
    </Tooltip>
  );

  const processBtn = gameState.isModeGameDealer ? (
    <Tooltip placement="top" title={processTitle}>
      <StyledDefaultButton
        type="link"
        icon={processIcon}
        onClick={processRound}
      />
    </Tooltip>
  ) : null;

  return (
    <StyleIssueCard
      isCurrent={isCurrent}
      isHaveStats={isHaveStats}
      isGameMode={gameState.isModeGame}
      className={className}>
      <StyledIssueCardInfo>
        {mark}
        <Tooltip placement="top" title={issue.title}>
          <StyledIssueTitle>{issue.title}</StyledIssueTitle>
        </Tooltip>
        <StyledIssuePriority>{issue.priority}</StyledIssuePriority>
      </StyledIssueCardInfo>
      {gameState.isDealer ? (
        <StyledIssueCardControls>
          {processBtn}
          {editBtn}
          {deleteBtn}
        </StyledIssueCardControls>
      ) : null}
    </StyleIssueCard>
  );
});
