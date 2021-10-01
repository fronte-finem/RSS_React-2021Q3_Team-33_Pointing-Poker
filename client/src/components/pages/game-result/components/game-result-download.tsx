import XLSX from 'xlsx';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { getGameResultXLS } from '../shared/utils/utils';
import { StyleDownloadButton } from '../game-result-styles';

export const DownloadButton = observer(() => {
  const { gameState } = useStateService();

  const downloadXLS = () => {
    const ws = XLSX.utils.json_to_sheet(
      getGameResultXLS(gameState.getStatistics())
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
    XLSX.writeFile(wb, 'GameResult.xlsx');
  };

  return (
    <StyleDownloadButton onClick={downloadXLS}>Download</StyleDownloadButton>
  );
});
