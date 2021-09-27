import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { StyledTitle } from '@client/components/styles/text';
import { Statistics } from '@client/components/pages/game/statistics/statistics';
import { PanelHeader } from '@client/components/pages/game/issues/panel-header';
import {
  StyledCollapse,
  StyledIssueButton,
  StyledIssues,
  StyledPanel,
} from './issues.styles';

export const Issues = observer(function Issues() {
  const { gameState, modalState } = useStateService();

  return (
    <StyledIssues>
      <StyledTitle level={2}>Issues:</StyledTitle>
      <StyledCollapse defaultActiveKey={modalState.selectIssue}>
        {gameState.getIssues(true).map((issue) => (
          <StyledPanel
            key={issue.id}
            header={<PanelHeader issue={issue} />}
            collapsible={
              gameState.isHaveStats(issue.id) ? undefined : 'disabled'
            }>
            <Statistics issueId={issue.id} />
          </StyledPanel>
        ))}
      </StyledCollapse>
      {gameState.isDealer ? <StyledIssueButton /> : null}
    </StyledIssues>
  );
});
