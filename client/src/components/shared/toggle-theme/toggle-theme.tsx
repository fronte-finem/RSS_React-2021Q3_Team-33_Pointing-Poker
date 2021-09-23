import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { Toggle } from '@client/components/shared/toggle/toggle';

export const ThemeToggle = observer(() => {
  const { themeState } = useStateService();

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
