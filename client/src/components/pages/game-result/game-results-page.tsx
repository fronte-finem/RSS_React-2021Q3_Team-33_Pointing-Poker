import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { Button } from '@client/components/shared/button/button';
import {
  Controls,
  StyleGameResults,
  StyleGameResultText,
} from './game-result-styles';
import { DownloadButton } from './components/game-result-download';
import { GameResults } from './components/game-results';

export const GameResultsPage = observer(() => {
  const { gameState } = useStateService();

  return (
    <StyleGameResults>
      <StyleGameResultText>{gameState.title}</StyleGameResultText>
      <Controls>
        <DownloadButton />
        <Button type="default" onClick={() => gameState.reset()}>
          Exit
        </Button>
      </Controls>
      <GameResults />
    </StyleGameResults>
  );
});
