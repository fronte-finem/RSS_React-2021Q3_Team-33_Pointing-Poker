import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { Issue } from '@shared/api-types/issue';
import { StyleGameResults, StyleGameResultText } from './game-result-styles';
import { setScores } from './shared/utils/utils';
import { GameResultsRender } from './shared/types/types';
import { DownloadButton } from './components/game-result-download';
import { GameResults } from './components/game-results';

export const GameResultsPage = observer(() => {
  const { gameState } = useGameService();
  const [gameResultsRender, setGameResultsRender] = useState<
    GameResultsRender[]
  >([]);

  useEffect(() => {
    setGameResultsRender(
      gameState.results.map<GameResultsRender>((result) => ({
        issue: gameState.issues.find(
          (issue) => issue.id === result.issueId
        ) as Issue,
        scores: setScores(result.scores),
      }))
    );
  }, [gameState.results]);
  return (
    <StyleGameResults>
      <StyleGameResultText>{gameState.title}</StyleGameResultText>
      <DownloadButton gameResults={gameResultsRender} />
      <GameResults
        gameResultsRender={gameResultsRender}
        scoreType={gameState.settings.scoreType}
      />
    </StyleGameResults>
  );
});
