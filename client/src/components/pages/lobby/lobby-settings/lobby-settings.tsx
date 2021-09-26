import React from 'react';
import { observer } from 'mobx-react-lite';
import { SettingsTimer } from '@client/components/pages/lobby/lobby-settings/settings-timer';
import { SettingsCards } from '@client/components/pages/lobby/lobby-settings/settings-cards';
import { SettingsGame } from '@client/components/pages/lobby/lobby-settings/settings-game';
import { StyledTitle } from '@client/components/styles/text';
import {
  StyleLobbySettings,
  StyleLobbySettingsWrapper,
} from './lobby-settings-styles';

export const LobbySettingsSection = observer(() => {
  return (
    <StyleLobbySettings>
      <StyledTitle level={2}>Game settings:</StyledTitle>
      <StyleLobbySettingsWrapper>
        <SettingsGame />
        <SettingsTimer />
      </StyleLobbySettingsWrapper>

      <StyledTitle level={2}>Cards settings:</StyledTitle>
      <StyleLobbySettingsWrapper>
        <SettingsCards />
      </StyleLobbySettingsWrapper>
    </StyleLobbySettings>
  );
});
