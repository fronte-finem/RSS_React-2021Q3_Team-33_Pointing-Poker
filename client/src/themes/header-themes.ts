import { HeaderTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightHeaderTheme: HeaderTheme = {
  fg: LightThemeColor.PRIMARY_MID,
  bg: LightThemeColor.PRIMARY_LIGHT,
  logo: {
    letter1: LightThemeColor.ACCENT_LIGHT,
    letter2: LightThemeColor.WHITE,
    rhombus: LightThemeColor.PRIMARY_DARK,
  },
};

export const darkHeaderTheme: HeaderTheme = {
  fg: DarkThemeColor.PRIMARY_LIGHT,
  bg: DarkThemeColor.PRIMARY_DARK,
  logo: {
    letter1: DarkThemeColor.WHITE,
    letter2: DarkThemeColor.ACCENT_LIGHT,
    rhombus: DarkThemeColor.PRIMARY_LIGHT,
  },
};
