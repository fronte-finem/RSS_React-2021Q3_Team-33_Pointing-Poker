import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import React from 'react';
import { StyledTitle } from '@client/components/styles/text';
import { orderStats } from '@client/utils/issue-stats';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { Item, List, StyledStats } from './statistics.styles';

interface Props {
  issueId: string;
}

export const Statistics = observer(function Statistics({ issueId }: Props) {
  const { gameState } = useStateService();

  return (
    <StyledStats>
      <List>
        {gameState
          .getIssueStats(issueId)
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
