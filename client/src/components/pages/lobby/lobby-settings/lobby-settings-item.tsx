import React from 'react';
import {
  StyleLobbySettingsControl,
  StyleLobbySettingsDesc,
  StyleLobbySettingsItem,
} from '@client/components/pages/lobby/lobby-settings/lobby-settings-styles';

interface Props {
  title: string;
}

export const SettingsItem: React.FC<Props> = ({ children, title }) => (
  <StyleLobbySettingsItem gutter={[5, 5]}>
    <StyleLobbySettingsDesc>{title}</StyleLobbySettingsDesc>
    <StyleLobbySettingsControl>{children}</StyleLobbySettingsControl>
  </StyleLobbySettingsItem>
);
