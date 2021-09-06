import React, { useEffect, useState } from 'react';
import { StyledColon, TimerWrapper } from './timerwrapper';

export const Timer: React.FC<{ time: number }> = (props) => {
  const { time } = props;

  const [minutes, setMinutes] = useState(Math.floor(time / 60));
  const [seconds, setSeconds] = useState(time - minutes * 60);

  useEffect(() => {
    const interval = setInterval((): void => {
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <TimerWrapper>
      {' '}
      <p
        style={{
          position: 'absolute',
          top: '0px',
          left: '20px',
          margin: '0',
        }}>
        {minutes}
      </p>
      <StyledColon>:</StyledColon>
      <p
        style={{
          position: 'absolute',
          top: '0px',
          right: '5px',
          margin: '0',
        }}>
        {seconds > 10 ? seconds : `0${seconds}`}
      </p>
    </TimerWrapper>
  );
};
