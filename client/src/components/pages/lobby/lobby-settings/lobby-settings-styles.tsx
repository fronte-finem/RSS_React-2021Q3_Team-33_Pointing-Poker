import styled from 'styled-components';
import { InputNumber, Row } from 'antd';
import { Input } from '@client/components/shared/input/input';
import { TimerWrapper } from '@client/components/shared/timer/timer.styles';
import {
  fontSubtitle,
  fontTextSmall,
  fontTitle,
} from '@client/themes/typography';

export const StyleLobbySettings = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 20px;
`;

export const StyleLobbySettingsWrapper = styled(Row)`
  width: 100%;
  flex-direction: column;
`;

export const StyleLobbySettingsItem = styled(Row)`
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const StyleLobbySettingsDesc = styled.div`
  ${fontSubtitle};
  color: ${({ theme }) => theme.pages.lobby.subtitle};
`;

export const StyleLobbySettingsControl = styled.div`
  margin-left: auto;
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

const TimerSection = styled(InputNumber)`
  width: 70px;
  ${fontTitle};
  font-size: 32px;
  line-height: 40px;
  border: none;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.18);
  border-radius: 6px;

  color: ${({ theme }) => theme.timer.fg};
  background-color: ${({ theme }) => theme.timer.bg};

  .ant-input-number-input {
    padding-right: 25px;
    text-align: right;
  }

  &:focus {
    outline: none;
  }

  &::before {
    content: var(--title, '');
    position: absolute;
    top: -13px;
    left: 7px;
    ${fontTextSmall};
    color: ${({ theme }) => theme.timer.desc};
    opacity: 0.5;
  }
`;

export const StyleLobbySettingsTimerMinutes = styled(TimerSection)`
  --title: 'minutes';
`;

export const StyleLobbySettingsTimerSeconds = styled(TimerSection)`
  --title: 'seconds';
`;

export const StyleLobbySettingsScore = styled(Input)`
  width: 300px;
  height: 36px;
`;
