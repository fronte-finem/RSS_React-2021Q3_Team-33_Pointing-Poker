import XLSX from 'xlsx';
import React from 'react';
import {
  CardResults,
  GameResultXLS,
  GameResultsRender,
} from './shared/types/types';
import { StyleDownloadButton } from './game-result-styles';

export const DownloadButton: React.FC<{ gameResults: GameResultsRender[] }> = (
  props
) => {
  const { gameResults } = props;

  const downloadxls = () => {
    const gameResultsXLS: GameResultXLS[] = [];
    gameResults.map((gameResult: GameResultsRender) =>
      gameResult.scores.map((cardResult: CardResults) =>
        gameResultsXLS.push({
          issue: gameResult.issue.title,
          priority: gameResult.issue.priority,
          score: cardResult.score,
          percent: cardResult.percent,
        })
      )
    );
    const ws = XLSX.utils.json_to_sheet(gameResultsXLS);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
    XLSX.writeFile(wb, 'GameResult.xlsx');
  };

  return (
    <StyleDownloadButton onClick={downloadxls}>Download</StyleDownloadButton>
  );
};
