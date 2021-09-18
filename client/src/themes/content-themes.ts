import { ContentTheme } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightContentTheme: ContentTheme = {
  fg: '#0001',
  bg: LightThemeColor.WHITE,
};

export const darkContentTheme: ContentTheme = {
  fg: '#fff2',
  bg: DarkThemeColor.PRIMARY_MID,
};
