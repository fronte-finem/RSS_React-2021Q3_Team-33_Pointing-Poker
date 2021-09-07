import React, { useEffect, useState } from 'react';
import { StyledColon, TimerSection, TimerWrapper } from './timer-wrapper';

const formatTime = (time: number): { minutes: number; seconds: number } => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return { minutes, seconds };
};

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

export const Timer: React.FC<{ time: number }> = (props) => {
  const { time } = props;
  const { minutes, seconds } = formatTime(useTimer(time));

  return (
    <TimerWrapper>
      <TimerSection>{minutes}</TimerSection>
      <StyledColon>:</StyledColon>
      <TimerSection isSeconds>
        {seconds > 9 ? seconds : `0${seconds}`}
      </TimerSection>
    </TimerWrapper>
  );
};
