import { ForeGroundBackGround } from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';

export const lightDefaultTheme: ForeGroundBackGround = {
  fg: LightThemeColor.PRIMARY,
  bg: LightThemeColor.WHITE,
};

export const darkDefaultTheme: ForeGroundBackGround = {
  fg: DarkThemeColor.WHITE,
  bg: DarkThemeColor.PRIMARY,
};
