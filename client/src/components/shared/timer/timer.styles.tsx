import { DividerProps } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledTimerWrapper = styled.div`
  width: 150px;
  height: 63px;
  color: ${({ theme }) => theme.timer.fg};
  background-color: ${({ theme }) => theme.timer.bg};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  border-radius: 5px;
  font-size: 64px;
  line-height: 64px;
`;

export const StyledColon = styled.p`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;

export const TimerSection = styled.div<{ isSeconds?: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ isSeconds }) => (isSeconds ? 'unset' : '20px')};
  right: ${({ isSeconds }) => (isSeconds ? '5px' : 'unset')};
`;

export const TimerWrapper: React.FC<DividerProps> = (props) => {
  return <StyledTimerWrapper {...props} />;
};
