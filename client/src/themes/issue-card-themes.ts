import { IssueCardTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightIssueCardTheme: IssueCardTheme = {
  fg: LightThemeColor.WHITE,
  bg: LightThemeColor.PRIMARY_LIGHT,
  priority: LightThemeColor.FONT_TEXT,
  current: {
    fg: LightThemeColor.FONT_TITLE,
    bg: LightThemeColor.ACCENT_DARK,
  },
  button: {
    default: {
      normal: LightThemeColor.WHITE,
      hover: LightThemeColor.PRIMARY,
      active: LightThemeColor.PRIMARY_DARK,
    },
    danger: {
      normal: LightThemeColor.DANGER,
      hover: LightThemeColor.DANGER_LIGHT,
      active: LightThemeColor.DANGER_DARK,
    },
  },
};

export const darkIssueCardTheme: IssueCardTheme = {
  fg: DarkThemeColor.FONT_TITLE,
  bg: DarkThemeColor.PRIMARY_LIGHT,
  priority: DarkThemeColor.FONT_TEXT,
  current: {
    fg: DarkThemeColor.BLACK,
    bg: DarkThemeColor.ACCENT,
  },
  button: {
    default: {
      normal: DarkThemeColor.WHITE,
      hover: DarkThemeColor.ACCENT,
      active: DarkThemeColor.ACCENT_DARK,
    },
    danger: {
      normal: LightThemeColor.DANGER,
      hover: LightThemeColor.DANGER_LIGHT,
      active: LightThemeColor.DANGER_DARK,
    },
  },
};
