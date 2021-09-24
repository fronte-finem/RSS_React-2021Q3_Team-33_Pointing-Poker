import { ContentTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightContentTheme: ContentTheme = {
  fg: LightThemeColor.FONT_TEXT,
  bg: LightThemeColor.WHITE,
  shadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
};

export const darkContentTheme: ContentTheme = {
  fg: DarkThemeColor.FONT_TEXT,
  bg: DarkThemeColor.PRIMARY,
  shadow: 'none',
};
