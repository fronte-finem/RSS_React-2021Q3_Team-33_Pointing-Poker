import { FooterTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightFooterTheme: FooterTheme = {
  fg: LightThemeColor.PRIMARY_MID,
  bg: LightThemeColor.PRIMARY_LIGHT,
  logo: {
    normal: LightThemeColor.PRIMARY_DARK,
    hover: LightThemeColor.ACCENT_DARK,
    active: LightThemeColor.BLACK,
  },
  team: {
    mentor: {
      fg: {
        normal: LightThemeColor.WHITE,
        hover: LightThemeColor.PRIMARY_LIGHT,
        active: LightThemeColor.PRIMARY_LIGHT,
      },
      bg: {
        normal: LightThemeColor.ACCENT_DARK,
        hover: LightThemeColor.BLACK,
        active: LightThemeColor.BLACK,
      },
    },
    student: {
      fg: {
        normal: LightThemeColor.PRIMARY_LIGHT,
        hover: LightThemeColor.PRIMARY_LIGHT,
        active: LightThemeColor.PRIMARY_LIGHT,
      },
      bg: {
        normal: LightThemeColor.PRIMARY_MID,
        hover: LightThemeColor.PRIMARY_DARK,
        active: LightThemeColor.PRIMARY_DARK,
      },
    },
  },
};

export const darkFooterTheme: FooterTheme = {
  fg: DarkThemeColor.PRIMARY_MID,
  bg: DarkThemeColor.PRIMARY_DARK,
  logo: {
    normal: DarkThemeColor.PRIMARY_LIGHT,
    hover: DarkThemeColor.WHITE,
    active: DarkThemeColor.WHITE,
  },
  team: {
    mentor: {
      fg: {
        normal: DarkThemeColor.PRIMARY_LIGHT,
        hover: DarkThemeColor.PRIMARY_MID,
        active: DarkThemeColor.PRIMARY_MID,
      },
      bg: {
        normal: DarkThemeColor.BLACK,
        hover: DarkThemeColor.WHITE,
        active: DarkThemeColor.WHITE,
      },
    },
    student: {
      fg: {
        normal: DarkThemeColor.PRIMARY_DARK,
        hover: DarkThemeColor.PRIMARY_DARK,
        active: DarkThemeColor.PRIMARY_DARK,
      },
      bg: {
        normal: DarkThemeColor.PRIMARY_MID,
        hover: DarkThemeColor.PRIMARY_LIGHT,
        active: DarkThemeColor.PRIMARY_LIGHT,
      },
    },
  },
};
