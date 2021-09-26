import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import React from 'react';
import { StyledTitle } from '@client/components/styles/text';
import { orderStats } from '@client/utils/issue-stats';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { Item, List, StyledStats } from './statistics.styles';

export const Statistics = observer(function Statistics() {
  const { gameState, modalState } = useStateService();

  if (!modalState.selectIssue) return null;

  return (
    <StyledStats>
      <StyledTitle level={2}>Statistics:</StyledTitle>
      <IssueCard issue={gameState.getIssue(modalState.selectIssue)} />
      <List>
        {gameState
          .getIssueStats(modalState.selectIssue)
          .sort(orderStats)
          .map(({ score, percent }) => (
            <Item key={score}>
              <GameCard score={score} />
              <StyledTitle level={4}>{percent.toFixed(1)}%</StyledTitle>
            </Item>
          ))}
      </List>
    </StyledStats>
  );
});
