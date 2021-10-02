import { IssueButton } from '@client/components/shared/issue/issue-button';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { StyledTitle } from '@client/components/styles/text';
import { StyledLobbySection } from '../lobby-styles';
import { StyleLobbyIssueGrid } from './lobby-issue-style';

export const LobbyIssueSection: React.FC = observer(() => {
  const { gameState } = useStateService();

  return (
    <StyledLobbySection>
      <StyledTitle level={2}>Issue:</StyledTitle>
      <StyleLobbyIssueGrid>
        {gameState.issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
        <IssueButton />
      </StyleLobbyIssueGrid>
    </StyledLobbySection>
  );
});
