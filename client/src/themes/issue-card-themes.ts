import { IssueCardTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightIssueCardTheme: IssueCardTheme = {
  fg: LightThemeColor.FONT_TITLE,
  bg: LightThemeColor.WHITE,
  priority: LightThemeColor.FONT_TEXT,
  current: {
    fg: LightThemeColor.WHITE,
    bg: LightThemeColor.PRIMARY_LIGHT,
  },
  button: {
    default: {
      normal: LightThemeColor.GREY,
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
    fg: DarkThemeColor.WHITE,
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
