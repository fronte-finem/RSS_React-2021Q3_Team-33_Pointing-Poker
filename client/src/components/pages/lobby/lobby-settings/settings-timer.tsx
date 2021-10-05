import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { SettingsItem } from '@client/components/pages/lobby/lobby-settings/lobby-settings-item';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { LobbyTimer } from '@client/components/pages/lobby/lobby-settings/lobby-timer';

export const SettingsTimer = observer(() => {
  const { gameState } = useStateService();
  const [isShowGameTimer, setIsShowGameTimer] = useState(
    Boolean(gameState.settings.timeout)
  );

  const toggleTimer = (isShow: boolean) => {
    setIsShowGameTimer(isShow);
    if (!isShow) {
      gameState.setTimeout(undefined);
    }
  };

  return (
    <>
      <SettingsItem title="Is timer needed:">
        <Toggle
          onChange={toggleTimer}
          defaultChecked={Boolean(gameState.settings.timeout)}
        />
      </SettingsItem>
      {isShowGameTimer ? (
        <SettingsItem title="Round time:">
          <LobbyTimer
            initialTime={gameState.settings.timeout}
            setTimeoutRound={(timeout) => gameState.setTimeout(timeout)}
          />
        </SettingsItem>
      ) : null}
    </>
  );
});
