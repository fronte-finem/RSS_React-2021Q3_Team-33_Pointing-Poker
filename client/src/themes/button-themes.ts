import { ButtonTheme, InteractiveColors } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

const lightA: InteractiveColors = {
  normal: LightThemeColor.PRIMARY_DARK,
  hover: LightThemeColor.PRIMARY_MID,
  active: LightThemeColor.BLACK,
};

const lightB: InteractiveColors = {
  normal: LightThemeColor.PRIMARY_LIGHT,
  hover: LightThemeColor.PRIMARY_LIGHT,
  active: LightThemeColor.PRIMARY_LIGHT,
};

export const lightButtonTheme: ButtonTheme = {
  default: {
    bg: lightB,
    fg: lightA,
  },
  primary: {
    bg: lightA,
    fg: lightB,
  },
};

const darkA: InteractiveColors = {
  normal: DarkThemeColor.PRIMARY_MID,
  hover: DarkThemeColor.PRIMARY_LIGHT,
  active: DarkThemeColor.WHITE,
};

const darkB: InteractiveColors = {
  normal: DarkThemeColor.PRIMARY_DARK,
  hover: DarkThemeColor.PRIMARY_DARK,
  active: DarkThemeColor.PRIMARY_DARK,
};

export const darkButtonTheme: ButtonTheme = {
  default: {
    bg: darkB,
    fg: darkA,
  },
  primary: {
    bg: darkA,
    fg: darkB,
  },
};
