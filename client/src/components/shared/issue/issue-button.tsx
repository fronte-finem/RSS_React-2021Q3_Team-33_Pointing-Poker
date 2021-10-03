import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Popover } from 'antd';
import { useStateService } from '@client/providers/state-service';
import { PRIORITY_VALUES } from '@shared/api-validation/issue';
import { parseFileToIssue } from '@client/utils/issue-parse';
import {
  StyleAddIcon,
  StyledIssueButtonCard,
  StyledIssueButtonCardControls,
  StyledIssueButtonCardInfo,
  StyledIssuesLoadInput,
  StyledLoadIcon,
  StyleIssueTitle,
} from './issue-button-styles';

interface Props {
  className?: string;
}

export const IssueButton = observer(({ className }: Props) => {
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

const IssuesLoadInfo = () => {
  return (
    <div>
      <p>
        Accepted file types: <b>xlsx, csv</b>.
      </p>
      <p>
        For correct parsing, the file must contain headers:
        <br /> <b>title, priority</b> and optionally <b>link</b>.
      </p>
      <p>
        The field <b>priority</b> can contain one of the following values:
        <br /> <b>{PRIORITY_VALUES.join(', ')}</b>.
      </p>
    </div>
  );
};

export const IssuesLoadControl = observer(({ className }: Props) => {
  const { gameState } = useStateService();
  const refButton = useRef<HTMLButtonElement | null>(null);
  const refInput = useRef<HTMLInputElement | null>(null);

  const loadIssues = async (file: File | undefined) => {
    if (!file) return;
    const issues = await parseFileToIssue(file);
    if (issues.length === 0) return;
    gameState.appendIssues(
      issues.map((item) => ({ ...item, id: `${Math.random()}` }))
    );
  };

  const onClick = () => {
    refInput.current?.click();
    console.log(gameState.issues.length);
  };

  const onDragOver = (event: React.DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'link';
  };

  const onDrop = (event: React.DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
    loadIssues(event.dataTransfer.files[0]).then(null);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    loadIssues(event.target.files?.[0]).then(null);
  };

  return (
    <Popover content={IssuesLoadInfo}>
      <StyledIssueButtonCard
        ref={refButton}
        onClick={onClick}
        onDragOver={onDragOver}
        onDrop={onDrop}
        className={className}>
        <StyledIssueButtonCardInfo>
          <StyleIssueTitle>Drop file / Click to load</StyleIssueTitle>
        </StyledIssueButtonCardInfo>
        <StyledIssueButtonCardControls>
          <StyledLoadIcon />
        </StyledIssueButtonCardControls>
        <StyledIssuesLoadInput
          type="file"
          accept=".xlsx,.csv"
          ref={refInput}
          onChange={onChange}
        />
      </StyledIssueButtonCard>
    </Popover>
  );
});
