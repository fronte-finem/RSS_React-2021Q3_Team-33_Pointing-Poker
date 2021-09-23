import { HeaderTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';
import { Shadows } from './shadows';

export const lightHeaderTheme: HeaderTheme = {
  fg: LightThemeColor.FONT_TEXT,
  bg: LightThemeColor.PRIMARY,
  logo: {
    letter1: LightThemeColor.WHITE,
    letter2: LightThemeColor.WHITE,
    rhombus: LightThemeColor.ACCENT,
  },
  shadow: Shadows.MEDIUM,
};

export const darkHeaderTheme: HeaderTheme = {
  fg: DarkThemeColor.FONT_TEXT,
  bg: DarkThemeColor.PRIMARY,
  logo: {
    letter1: DarkThemeColor.WHITE,
    letter2: DarkThemeColor.WHITE,
    rhombus: DarkThemeColor.ACCENT,
  },
  shadow: Shadows.MEDIUM,
};
