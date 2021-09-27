import { LobbyPageTheme, MainPageTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from './colors';

export const LightMainPageTheme: MainPageTheme = {
  title: LightThemeColor.PRIMARY,
  subtitle: LightThemeColor.FONT_SUBTITLE,
};

export const DarkMainPageTheme: MainPageTheme = {
  title: DarkThemeColor.FONT_TITLE,
  subtitle: DarkThemeColor.FONT_SUBTITLE,
};

export const LightLobbyPageTheme: LobbyPageTheme = {
  title: LightThemeColor.FONT_TITLE,
  subtitle: LightThemeColor.FONT_SUBTITLE,
  text: LightThemeColor.FONT_TEXT,
};

export const DarkLobbyPageTheme: LobbyPageTheme = {
  title: DarkThemeColor.FONT_TITLE,
  subtitle: DarkThemeColor.FONT_SUBTITLE,
  text: DarkThemeColor.FONT_TEXT,
};
