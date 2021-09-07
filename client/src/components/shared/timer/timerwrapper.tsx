import { DividerProps } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledTimerWrapper = styled.div`
  width: 150px;
  height: 63px;
  background-color: ${(props) => props.theme.bg};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  border-radius: 5px;
  color: ${(props) => props.theme.fontColor};
  font-size: 24px;
  font-size: 64px;
  line-height: 64px;
`;

export const StyledColon = styled.p`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;

export const TimerWrapper: React.FC<DividerProps> = (props) => {
  return <StyledTimerWrapper {...props} />;
};
