import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { SettingsItem } from '@client/components/pages/lobby/lobby-settings/lobby-settings-item';
import { StyleLobbySettingsScore } from '@client/components/pages/lobby/lobby-settings/lobby-settings-styles';
import { Button } from '@client/components/shared/button/button';

export const SettingsCards = observer(() => {
  const { gameState, modalState } = useStateService();

  const setScoreType = (scoreType: string) => gameState.setScoreType(scoreType);

  return (
    <>
      <SettingsItem title="Score type:">
        <StyleLobbySettingsScore
          type="text"
          value={gameState.settings.cardsScoreType}
          onChange={(e) => setScoreType(e.target.value)}
        />
      </SettingsItem>
      <SettingsItem title="Customize cards deck:">
        <Button onClick={() => modalState.openCardsCustomize()}>
          Customize
        </Button>
      </SettingsItem>
    </>
  );
});
