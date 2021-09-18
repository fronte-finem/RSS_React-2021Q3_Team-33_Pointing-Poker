import React, { useEffect, useState } from 'react';
import {
  StyleLobbySettingsTimer,
  StyleLobbySettingsTimerMinutes,
  StyleLobbySettingsTimerSeconds,
} from './lobby-settings-styles';

interface LobbyTimerProps {
  initialTime?: number;
  setTimeoutRound: (time: number) => void;
}

export const LobbyTimer = ({
  initialTime = 0,
  setTimeoutRound,
}: LobbyTimerProps): JSX.Element => {
  const [minutes, setMinutes] = useState(Math.trunc(initialTime / 60));
  const [seconds, setSeconds] = useState(initialTime % 60);

  useEffect(() => {
    const time: number = minutes * 60 + seconds;
    setTimeoutRound(time);
  }, [minutes, seconds]);

  return (
    <StyleLobbySettingsTimer>
      <StyleLobbySettingsTimerMinutes
        value={minutes}
        min={0}
        max={59}
        onChange={(value) => setMinutes(+value)}
      />
      <StyleLobbySettingsTimerSeconds
        value={seconds}
        min={0}
        max={59}
        onChange={(value) => setSeconds(+value)}
      />
    </StyleLobbySettingsTimer>
  );
};
