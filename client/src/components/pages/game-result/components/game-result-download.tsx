import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { Button } from '@client/components/shared/button/button';
import { getGameResultXLS } from '../shared/utils/utils';

export const DownloadButton = observer(() => {
  const { gameState } = useStateService();

  const downloadXLS = async () => {
    const XLSX = await import('xlsx');
    const ws = XLSX.utils.json_to_sheet(
      getGameResultXLS(gameState.getStatistics())
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, gameState.title);
    XLSX.writeFile(wb, 'GameResult.xlsx');
  };

  return <Button onClick={downloadXLS}>Download</Button>;
});
