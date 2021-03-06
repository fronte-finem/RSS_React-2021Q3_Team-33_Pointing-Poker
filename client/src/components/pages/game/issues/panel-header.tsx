import React, { SyntheticEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { Issue } from '@shared/api-types/issue';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { StyledPanelHeader } from '@client/components/pages/game/issues/panel-header.styles';
import { useStateService } from '@client/providers/state-service';

interface Props {
  issue: Issue;
}

export const PanelHeader = observer(function PanelHeader({ issue }: Props) {
  const { gameState } = useStateService();
  const stopPropagation = (event: SyntheticEvent) => event.stopPropagation();

  return (
    <StyledPanelHeader onClick={stopPropagation}>
      <IssueCard issue={issue} controls={gameState.isDealer} />
    </StyledPanelHeader>
  );
});
