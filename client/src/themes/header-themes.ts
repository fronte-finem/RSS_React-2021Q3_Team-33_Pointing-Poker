import { HeaderTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightHeaderTheme: HeaderTheme = {
  fg: LightThemeColor.FONT_TEXT,
  bg: LightThemeColor.PRIMARY,
  logo: {
    letter1: LightThemeColor.WHITE,
    letter2: LightThemeColor.WHITE,
    rhombus: LightThemeColor.ACCENT,
  },
  btn: {
    chat: {
      normal: LightThemeColor.PRIMARY_DARK,
      hover: LightThemeColor.PRIMARY_MID,
      active: LightThemeColor.WHITE,
    },
  },
};

export const darkHeaderTheme: HeaderTheme = {
  fg: DarkThemeColor.FONT_TEXT,
  bg: DarkThemeColor.PRIMARY,
  logo: {
    letter1: DarkThemeColor.WHITE,
    letter2: DarkThemeColor.WHITE,
    rhombus: DarkThemeColor.ACCENT,
  },
  btn: {
    chat: {
      normal: LightThemeColor.PRIMARY_MID,
      hover: LightThemeColor.PRIMARY_LIGHT,
      active: LightThemeColor.WHITE,
    },
  },
};
