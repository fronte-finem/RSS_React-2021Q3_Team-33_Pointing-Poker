import { IssueButton } from '@client/components/shared/issue/issue-button';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { StyledLobbySection, StyleLobbyTitle } from '../lobby-styles';
import { StyleLobbyIssueGrid } from './lobby-issue-style';

export const LobbyIssueSection: React.FC = observer(() => {
  const { gameState } = useGameService();

  return (
    <StyledLobbySection>
      <StyleLobbyTitle level={2}>Issue:</StyleLobbyTitle>
      <StyleLobbyIssueGrid>
        {gameState.issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
        <IssueButton />
      </StyleLobbyIssueGrid>
    </StyledLobbySection>
  );
});
