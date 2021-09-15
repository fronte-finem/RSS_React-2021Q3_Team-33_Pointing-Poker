import { TimerWrapper } from '@client/components/shared/timer/timer-wrapper';
import { InputNumber, Row } from 'antd';
import styled from 'styled-components';

export const StyleLobbySettings = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyleLobbySettingsWrapper = styled(Row)`
  margin-top: 30px;
  width: 100%;
  justify-content: flex-start;
`;

export const StyleLobbySettingsItem = styled(Row)`
  margin-bottom: 20px;
  max-width: 550px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StyleLobbySettingsDesc = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Ruda';
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: ${(props) => props.theme.fontColor};
`;

export const StyleLobbySettingsTimer = styled(TimerWrapper)`
  padding: 13px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;

  &::before {
    content: ':';
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
  }
`;

export const StyleLobbySettingsTimerMinutes = styled(InputNumber)`
  width: 70px;
  font-family: 'Ruda';
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  border: none;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.18);
  border-radius: 6px;

  &:focus {
    outline: none;
  }

  &::before {
    content: 'minutes';
    position: absolute;
    top: -13px;
    left: 7px;
    font-family: 'Ruda';
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyleLobbySettingsTimerSeconds = styled(InputNumber)`
  width: 70px;
  font-family: 'Ruda';
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  border: none;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.18);
  border-radius: 6px;

  &:focus {
    outline: none;
  }
  &::before {
    content: 'seconds';
    position: absolute;
    top: -13px;
    left: 7px;
    font-family: 'Ruda';
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: rgba(0, 0, 0, 0.5);
  }
`;
