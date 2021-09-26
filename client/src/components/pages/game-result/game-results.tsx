import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { GameCard } from '@client/components/shared/game-card/game-card';
import {
  StyleGameResults,
  StyleGameResultText,
  StyleGameResultsWrapper,
  StyleGameResultIssue,
  StyleGameResultCard,
} from './game-result-styles';
import { setScores } from './shared/utils/utils';
import { GameResultsRender, CardResults } from './shared/types/types';
import { DownloadButton } from './game-result-download';

export const GameResultsPage = observer(() => {
  const { gameState } = useGameService();
  const [gameResultsRender, setGameResultsRender] = useState<
    GameResultsRender[]
  >([]);

  useEffect(() => {
    setGameResultsRender(
      gameState.results.map((result) => ({
        issue: gameState.issues.find((issue) => issue.id === result.issueId),
        scores: setScores(result.scores),
      })) as GameResultsRender[]
    );
  }, [gameState.results]);
  return (
    <StyleGameResults>
      <StyleGameResultText>{gameState.title}</StyleGameResultText>
      <DownloadButton gameResults={gameResultsRender} />
      <StyleGameResultsWrapper>
        {gameResultsRender.map((result: GameResultsRender) => (
          <div>
            <IssueCard issue={result.issue} />
            <StyleGameResultIssue>
              {result.scores.map((score: CardResults) => (
                <StyleGameResultCard>
                  <GameCard
                    score={score.score as number}
                    scoreType={gameState.settings.scoreType || 'SP'}
                  />
                  <StyleGameResultText>{score.percent} %</StyleGameResultText>
                </StyleGameResultCard>
              ))}
            </StyleGameResultIssue>
          </div>
        ))}
      </StyleGameResultsWrapper>
    </StyleGameResults>
  );
});
