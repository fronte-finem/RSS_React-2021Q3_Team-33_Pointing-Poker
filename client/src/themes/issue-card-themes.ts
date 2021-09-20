import { IssueCardTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';
import {
  darkDefaultTheme,
  lightDefaultTheme,
} from '@client/themes/default-color-themes';

export const lightIssueCardTheme: IssueCardTheme = {
  ...lightDefaultTheme,
  priority: LightThemeColor.PRIMARY_MID,
  current: {
    fg: LightThemeColor.BLACK,
    bg: LightThemeColor.PRIMARY_LIGHT,
  },
  button: {
    default: {
      normal: '#666',
      hover: '#333',
      active: LightThemeColor.BLACK,
    },
    danger: {
      normal: '#f00',
      hover: LightThemeColor.ACCENT_DARK,
      active: LightThemeColor.ACCENT_LIGHT,
    },
  },
};

export const darkIssueCardTheme: IssueCardTheme = {
  ...darkDefaultTheme,
  priority: DarkThemeColor.PRIMARY_MID,
  current: {
    fg: DarkThemeColor.PRIMARY_LIGHT,
    bg: DarkThemeColor.BLACK,
  },
  button: {
    default: {
      normal: '#999',
      hover: '#bbb',
      active: DarkThemeColor.WHITE,
    },
    danger: {
      normal: '#f00',
      hover: DarkThemeColor.ACCENT_DARK,
      active: DarkThemeColor.ACCENT_LIGHT,
    },
  },
};
