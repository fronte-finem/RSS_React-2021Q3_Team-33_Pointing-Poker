import React, { useEffect, useState } from 'react';
import { useStateService } from '@client/providers/state-service';
import { observer } from 'mobx-react-lite';
import { StyledColon, TimerSection, TimerWrapper } from './timer.styles';

const formatTime = (time: number): { minutes: number; seconds: number } => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return { minutes, seconds };
};

const padNum = (num: number) => `${num > 9 ? '' : '0'}${num}`;

const decreaseOrStopTimer = (timerId: number) => (time: number) => {
  if (time > 0) return time - 1;
  window.clearInterval(timerId);
  return 0;
};

export const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = window.setInterval(
      () => setTime(decreaseOrStopTimer(interval)),
      1000
    );
    return () => window.clearInterval(interval);
  }, [initialTime]);

  return time;
};

interface Props {
  time: number;
}

export const Timer = ({ time }: Props) => {
  const { minutes, seconds } = formatTime(useTimer(time));

  return (
    <TimerWrapper>
      <TimerSection>{padNum(minutes)}</TimerSection>
      <StyledColon>:</StyledColon>
      <TimerSection>{padNum(seconds)}</TimerSection>
    </TimerWrapper>
  );
};

export const GameTimer = observer(() => {
  const { gameState } = useStateService();
  const [time, setTime] = useState(gameState.settings.timeout || 0);

  useEffect(() => {
    if (!gameState.roundRun) {
      setTime(0);
      return () => {};
    }
    setTime(gameState.settings.timeout || 0);
    const interval = window.setInterval(
      () => setTime(decreaseOrStopTimer(interval)),
      1000
    );
    return () => window.clearInterval(interval);
  }, [gameState.roundRun]);

  const { minutes, seconds } = formatTime(time);

  return (
    <TimerWrapper>
      <TimerSection>{padNum(minutes)}</TimerSection>
      <StyledColon>:</StyledColon>
      <TimerSection>{padNum(seconds)}</TimerSection>
    </TimerWrapper>
  );
});
