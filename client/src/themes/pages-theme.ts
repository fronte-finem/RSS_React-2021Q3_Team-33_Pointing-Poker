import { MainPageTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from './colors';

export const LightMainPageTheme: MainPageTheme = {
  title: LightThemeColor.PRIMARY,
  subtitle: LightThemeColor.FONT_SUBTITLE,
  text: '',
};

export const DarkMainPageTheme: MainPageTheme = {
  title: DarkThemeColor.FONT_TITLE,
  subtitle: DarkThemeColor.FONT_SUBTITLE,
  text: '',
};
