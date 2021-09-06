import React from 'react';
import { TimerWrapper } from './timerwrapper';

export const Timer: React.FC<any> = () => {
  /* const [seconds, setSeconds] = useState(60); */

  const seconds = 60;

  return (
    <TimerWrapper>
      <p
        style={{
          position: 'relative',
          top: '0px',
          right: '-35px',
          margin: '0',
        }}>
        {seconds}
      </p>
    </TimerWrapper>
  );
};
