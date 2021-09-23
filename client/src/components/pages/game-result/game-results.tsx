import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { CSVLink } from 'react-csv';
import {
  StyleGameResults,
  StyleGameResultTitle,
  StyleGameResultsWrapper,
  StyleGameResultIssue,
} from './game-result-styles';

export const GameResultsPage = observer(() => {
  const { gameState } = useGameService();

  const headers = [
    { label: 'issueId', key: 'issueId' },
    { label: 'score', key: 'score' },
  ];

  const data = gameState.results.map((item) => ({
    issueId: item.issueId,
    score: item.scores.map((role) => role.score),
  }));
  return (
    <StyleGameResults>
      <StyleGameResultTitle>{gameState.title}</StyleGameResultTitle>
      <StyleGameResultsWrapper>
        {gameState.results.map((result) => (
          <div>
            {gameState.issues
              .filter((issue) => issue.id === result.issueId)
              .map((filterIssue) => (
                <IssueCard issue={filterIssue} />
              ))}
            <StyleGameResultIssue>
              {result.scores.map((score: any) => (
                <GameCard score={score.score} scoreType="sp" />
              ))}
            </StyleGameResultIssue>
          </div>
        ))}
      </StyleGameResultsWrapper>

      <CSVLink data={data} headers={headers} separator=";">
        Export to CSV
      </CSVLink>
    </StyleGameResults>
  );
});
