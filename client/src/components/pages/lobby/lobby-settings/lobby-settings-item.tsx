import React from 'react';
import {
  StyleLobbySettingsControl,
  StyleLobbySettingsDesc,
  StyleLobbySettingsItem,
} from '@client/components/pages/lobby/lobby-settings/lobby-settings-styles';
import { Toggle } from '@client/components/shared/toggle/toggle';

interface SettingsItemProps {
  title: string;
}

export const SettingsItem: React.FC<SettingsItemProps> = ({
  children,
  title,
}) => (
  <StyleLobbySettingsItem gutter={[5, 5]}>
    <StyleLobbySettingsDesc>{title}</StyleLobbySettingsDesc>
    <StyleLobbySettingsControl>{children}</StyleLobbySettingsControl>
  </StyleLobbySettingsItem>
);

export interface ToggleSettingsItemProps extends SettingsItemProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ToggleSettingsItem = ({
  title,
  checked,
  onChange,
}: ToggleSettingsItemProps) => (
  <SettingsItem title={title}>
    <StyleLobbySettingsControl>
      <Toggle checked={checked} onChange={onChange} />
    </StyleLobbySettingsControl>
  </SettingsItem>
);
