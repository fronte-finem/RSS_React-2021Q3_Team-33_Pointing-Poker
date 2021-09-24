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
};

export const darkHeaderTheme: HeaderTheme = {
  fg: DarkThemeColor.FONT_TEXT,
  bg: DarkThemeColor.PRIMARY,
  logo: {
    letter1: DarkThemeColor.WHITE,
    letter2: DarkThemeColor.WHITE,
    rhombus: DarkThemeColor.ACCENT,
  },
};
