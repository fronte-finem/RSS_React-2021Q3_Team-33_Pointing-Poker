import React from 'react';
import { IssueStats } from '@client/utils/issue-stats';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import {
  StyleGameResultCard,
  StyleGameResultIssue,
  StyleGameResultText,
} from '../game-result-styles';

interface Props {
  issueStats: IssueStats;
}

export const IssueStatsView = ({ issueStats }: Props) => {
  return (
    <div>
      <IssueCard issue={issueStats.issue} />
      <StyleGameResultIssue>
        {issueStats.stats.map(({ score, percent }) => (
          <StyleGameResultCard>
            <GameCard score={score} />
            <StyleGameResultText>{percent.toFixed(1)} %</StyleGameResultText>
          </StyleGameResultCard>
        ))}
      </StyleGameResultIssue>
    </div>
  );
};
