import {
  AvatarTheme,
  ChatMessageTheme,
  GameCardTheme,
  InputTheme,
  InteractiveColors,
  ModalTheme,
  TimerTheme,
  ToggleTheme,
  UserCardTheme,
} from 'types/styled';
import { DarkThemeColor, LightThemeColor } from '@client/themes/colors';
import {
  darkDefaultTheme,
  lightDefaultTheme,
} from '@client/themes/default-color-themes';

export const lightLinkTheme: InteractiveColors = {
  normal: LightThemeColor.PRIMARY_MID,
  hover: LightThemeColor.PRIMARY_DARK,
  active: LightThemeColor.WHITE,
};
export const darkLinkTheme: InteractiveColors = {
  normal: DarkThemeColor.PRIMARY_MID,
  hover: DarkThemeColor.PRIMARY_LIGHT,
  active: DarkThemeColor.BLACK,
};

export const lightToggleTheme: ToggleTheme = {
  checked: LightThemeColor.ACCENT_DARK,
  unchecked: LightThemeColor.PRIMARY_MID,
};
export const darkToggleTheme: ToggleTheme = {
  checked: DarkThemeColor.ACCENT_DARK,
  unchecked: DarkThemeColor.PRIMARY_MID,
};

export const lightInputTheme: InputTheme = lightDefaultTheme;
export const darkInputTheme: InputTheme = darkDefaultTheme;

export const lightGameCardTheme: GameCardTheme = lightDefaultTheme;
export const darkGameCardTheme: GameCardTheme = darkDefaultTheme;

export const lightTimerTheme: TimerTheme = lightDefaultTheme;
export const darkTimerTheme: TimerTheme = darkDefaultTheme;

export const lightModalTheme: ModalTheme = lightDefaultTheme;
export const darkModalTheme: ModalTheme = darkDefaultTheme;

export const lightAvatarTheme: AvatarTheme = {
  fg: LightThemeColor.PRIMARY_LIGHT,
  bg: LightThemeColor.PRIMARY_MID,
};
export const darkAvatarTheme: AvatarTheme = {
  fg: DarkThemeColor.PRIMARY_DARK,
  bg: DarkThemeColor.PRIMARY_MID,
};

export const lightUserCardTheme: UserCardTheme = {
  ...lightDefaultTheme,
  owner: LightThemeColor.ACCENT_DARK,
  jobPosition: LightThemeColor.PRIMARY_MID,
  deleteBtn: {
    normal: LightThemeColor.PRIMARY_LIGHT,
    hover: LightThemeColor.ACCENT_LIGHT,
    active: LightThemeColor.ACCENT_LIGHT,
  },
};
export const darkUserCardTheme: UserCardTheme = {
  ...darkDefaultTheme,
  owner: DarkThemeColor.ACCENT_DARK,
  jobPosition: DarkThemeColor.PRIMARY_MID,
  deleteBtn: {
    normal: DarkThemeColor.PRIMARY_LIGHT,
    hover: DarkThemeColor.ACCENT_LIGHT,
    active: DarkThemeColor.ACCENT_LIGHT,
  },
};

export const lightChatMessageTheme: ChatMessageTheme = {
  ...lightDefaultTheme,
  dateTime: LightThemeColor.PRIMARY_MID,
};
export const darkChatMessageTheme: ChatMessageTheme = {
  ...darkDefaultTheme,
  dateTime: DarkThemeColor.PRIMARY_MID,
};
