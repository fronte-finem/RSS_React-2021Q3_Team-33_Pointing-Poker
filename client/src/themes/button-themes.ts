import { ButtonTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightButtonTheme: ButtonTheme = {
  default: {
    fg: {
      normal: LightThemeColor.PRIMARY,
      hover: LightThemeColor.WHITE,
      active: LightThemeColor.WHITE,
    },
    bg: {
      normal: 'transparent',
      hover: LightThemeColor.PRIMARY_LIGHT,
      active: LightThemeColor.PRIMARY_DARK,
    },
  },
  primary: {
    fg: {
      normal: LightThemeColor.WHITE,
      hover: LightThemeColor.WHITE,
      active: LightThemeColor.WHITE,
    },
    bg: {
      normal: LightThemeColor.PRIMARY,
      hover: LightThemeColor.PRIMARY_LIGHT,
      active: LightThemeColor.PRIMARY_DARK,
    },
  },
};

export const darkButtonTheme: ButtonTheme = {
  default: {
    fg: {
      normal: DarkThemeColor.ACCENT,
      hover: DarkThemeColor.WHITE,
      active: DarkThemeColor.WHITE,
    },
    bg: {
      normal: 'transparent',
      hover: DarkThemeColor.ACCENT_LIGHT,
      active: DarkThemeColor.ACCENT_DARK,
    },
  },
  primary: {
    fg: {
      normal: DarkThemeColor.WHITE,
      hover: DarkThemeColor.WHITE,
      active: DarkThemeColor.WHITE,
    },
    bg: {
      normal: DarkThemeColor.ACCENT,
      hover: DarkThemeColor.ACCENT_LIGHT,
      active: DarkThemeColor.ACCENT_DARK,
    },
  },
};
