import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import {
  ToggleSettingsItem,
  ToggleSettingsItemProps,
} from '@client/components/pages/lobby/lobby-settings/lobby-settings-item';
import React from 'react';

export const SettingsGame = observer(() => {
  const { gameState } = useStateService();

  const toggleSettings: ToggleSettingsItemProps[] = [
    {
      title: 'Scram master as player:',
      checked: gameState.settings.dealerGamer,
      onChange: (check) => gameState.setDealerGamer(check),
    },
    {
      title: 'Auto join to game:',
      checked: gameState.settings.autoJoinToGame,
      onChange: (check) => gameState.setAutoJoinToGame(check),
    },
    {
      title: 'Auto open cards:',
      checked: gameState.settings.autoOpenCards,
      onChange: (check) => gameState.setAutoOpenCards(check),
    },
    {
      title: 'Changing card in round end:',
      checked: gameState.settings.changeAfterRoundEnd,
      onChange: (check) => gameState.setChangeAfterRoundEnd(check),
    },
  ];

  return (
    <>
      {toggleSettings.map((props) => (
        <ToggleSettingsItem key={props.title} {...props} />
      ))}
    </>
  );
});
