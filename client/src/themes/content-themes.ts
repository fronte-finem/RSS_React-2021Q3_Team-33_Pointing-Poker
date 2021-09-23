import { ContentTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';
import { Shadows } from './shadows';

export const lightContentTheme: ContentTheme = {
  fg: LightThemeColor.FONT_TEXT,
  bg: LightThemeColor.WHITE,
  shadow: Shadows.LARGE,
  wrapper: {
    shadow: Shadows.WRAPPER,
  },
};

export const darkContentTheme: ContentTheme = {
  fg: DarkThemeColor.FONT_TEXT,
  bg: DarkThemeColor.PRIMARY,
  shadow: Shadows.LARGE,
  wrapper: {
    shadow: Shadows.NONE,
  },
};
