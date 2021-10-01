import XLSX from 'xlsx';
import React from 'react';
import { GameResultsRender } from '../shared/types/types';
import { getGameResultXLS } from '../shared/utils/utils';
import { StyleDownloadButton } from '../game-result-styles';

export const DownloadButton: React.FC<{ gameResults: GameResultsRender[] }> = (
  props
) => {
  const { gameResults } = props;

  const downloadxls = () => {
    const ws = XLSX.utils.json_to_sheet(getGameResultXLS(gameResults));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
    XLSX.writeFile(wb, 'GameResult.xlsx');
  };

  return (
    <StyleDownloadButton onClick={downloadxls}>Download</StyleDownloadButton>
  );
};
