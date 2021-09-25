import React from 'react';
import { observer } from 'mobx-react-lite';
import { SettingsTimer } from '@client/components/pages/lobby/lobby-settings/settings-timer';
import { SettingsCards } from '@client/components/pages/lobby/lobby-settings/settings-cards';
import { SettingsGame } from '@client/components/pages/lobby/lobby-settings/settings-game';
import { StyleLobbyTitle } from '../lobby-styles';
import {
  StyleLobbySettings,
  StyleLobbySettingsWrapper,
} from './lobby-settings-styles';

export const LobbySettingsSection = observer(() => {
  return (
    <StyleLobbySettings>
      <StyleLobbyTitle level={2}>Game settings:</StyleLobbyTitle>
      <StyleLobbySettingsWrapper>
        <SettingsGame />
        <SettingsTimer />
      </StyleLobbySettingsWrapper>

      <StyleLobbyTitle level={2}>Cards settings:</StyleLobbyTitle>
      <StyleLobbySettingsWrapper>
        <SettingsCards />
      </StyleLobbySettingsWrapper>
    </StyleLobbySettings>
  );
});
