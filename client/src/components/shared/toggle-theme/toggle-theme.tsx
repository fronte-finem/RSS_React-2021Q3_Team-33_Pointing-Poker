import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { Toggle } from '@client/components/shared/toggle/toggle';

export const ThemeToggle = observer(() => {
  const { themeState } = useGameService();

  const toggleTheme = (checked: boolean) =>
    checked ? themeState.darkOn() : themeState.lightOn();

  return (
    <Toggle
      unCheckedChildren="light"
      checkedChildren="dark"
      defaultChecked={themeState.isDark}
      onChange={toggleTheme}
    />
  );
});
