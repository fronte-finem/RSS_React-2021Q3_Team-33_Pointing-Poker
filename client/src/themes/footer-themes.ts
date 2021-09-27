import { FooterTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightFooterTheme: FooterTheme = {
  fg: LightThemeColor.WHITE,
  bg: LightThemeColor.PRIMARY,
  logo: {
    normal: LightThemeColor.WHITE,
    hover: LightThemeColor.ACCENT,
    active: LightThemeColor.ACCENT_DARK,
  },
  team: {
    mentor: {
      fg: {
        normal: LightThemeColor.WHITE,
        hover: LightThemeColor.FONT_TITLE,
        active: LightThemeColor.FONT_TITLE,
      },
      bg: {
        normal: LightThemeColor.ACCENT,
        hover: LightThemeColor.WHITE,
        active: LightThemeColor.GREY,
      },
    },
    student: {
      fg: {
        normal: LightThemeColor.FONT_TITLE,
        hover: LightThemeColor.WHITE,
        active: LightThemeColor.WHITE,
      },
      bg: {
        normal: LightThemeColor.WHITE,
        hover: LightThemeColor.ACCENT,
        active: LightThemeColor.ACCENT_DARK,
      },
    },
  },
};

export const darkFooterTheme: FooterTheme = {
  fg: DarkThemeColor.FONT_TEXT,
  bg: DarkThemeColor.PRIMARY,
  logo: {
    normal: DarkThemeColor.WHITE,
    hover: DarkThemeColor.ACCENT,
    active: DarkThemeColor.ACCENT_DARK,
  },
  team: {
    mentor: {
      fg: {
        normal: DarkThemeColor.WHITE,
        hover: DarkThemeColor.BLACK,
        active: DarkThemeColor.FONT_TEXT,
      },
      bg: {
        normal: DarkThemeColor.ACCENT,
        hover: DarkThemeColor.WHITE,
        active: DarkThemeColor.GREY,
      },
    },
    student: {
      fg: {
        normal: DarkThemeColor.BLACK,
        hover: DarkThemeColor.WHITE,
        active: DarkThemeColor.FONT_TEXT,
      },
      bg: {
        normal: DarkThemeColor.WHITE,
        hover: DarkThemeColor.ACCENT,
        active: DarkThemeColor.ACCENT_DARK,
      },
    },
  },
};
