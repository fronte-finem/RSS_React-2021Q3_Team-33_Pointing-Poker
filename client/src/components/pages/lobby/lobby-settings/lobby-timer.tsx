import React, { useEffect, useState } from 'react';
import {
  StyleLobbySettingsTimer,
  StyleLobbySettingsTimerMinutes,
  StyleLobbySettingsTimerSeconds,
} from './lobby-settings-styles';

interface LobbyTimerProps {
  setTimeoutRound: (time: number) => void;
}

export const LobbyTimer = ({
  setTimeoutRound,
}: LobbyTimerProps): JSX.Element => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const time: number = minutes * 60 + seconds;
    setTimeoutRound(time);
  }, [minutes, seconds]);

  return (
    <StyleLobbySettingsTimer>
      <StyleLobbySettingsTimerMinutes
        min={0}
        max={59}
        onChange={(value) => setMinutes(+value)}
      />
      <StyleLobbySettingsTimerSeconds
        min={0}
        max={59}
        onChange={(value) => setSeconds(+value)}
      />
    </StyleLobbySettingsTimer>
  );
};
