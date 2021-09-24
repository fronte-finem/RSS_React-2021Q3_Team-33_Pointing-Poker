import {
  AvatarTheme,
  ChatMessageTheme,
  FormTheme,
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
  normal: LightThemeColor.PRIMARY,
  hover: LightThemeColor.PRIMARY_DARK,
  active: LightThemeColor.PRIMARY_LIGHT,
};
export const darkLinkTheme: InteractiveColors = {
  normal: DarkThemeColor.ACCENT,
  hover: DarkThemeColor.ACCENT_LIGHT,
  active: DarkThemeColor.ACCENT_DARK,
};

export const lightToggleTheme: ToggleTheme = {
  checked: LightThemeColor.ACCENT,
  unchecked: LightThemeColor.PRIMARY_LIGHT,
};
export const darkToggleTheme: ToggleTheme = {
  checked: DarkThemeColor.ACCENT,
  unchecked: DarkThemeColor.PRIMARY_DARK,
};

export const lightInputTheme: InputTheme = {
  fg: LightThemeColor.FONT_SUBTITLE,
  bg: LightThemeColor.WHITE,
};
export const darkInputTheme: InputTheme = {
  fg: DarkThemeColor.FONT_TEXT,
  bg: DarkThemeColor.PRIMARY,
};

export const lightGameCardTheme: GameCardTheme = lightDefaultTheme;
export const darkGameCardTheme: GameCardTheme = darkDefaultTheme;

export const lightTimerTheme: TimerTheme = lightDefaultTheme;
export const darkTimerTheme: TimerTheme = darkDefaultTheme;

export const lightModalTheme: ModalTheme = {
  fg: LightThemeColor.FONT_TITLE,
  bg: LightThemeColor.WHITE,
};
export const darkModalTheme: ModalTheme = {
  fg: DarkThemeColor.FONT_TITLE,
  bg: DarkThemeColor.PRIMARY,
};

export const lightAvatarTheme: AvatarTheme = {
  fg: LightThemeColor.WHITE,
  bg: LightThemeColor.ACCENT,
};
export const darkAvatarTheme: AvatarTheme = {
  fg: DarkThemeColor.WHITE,
  bg: DarkThemeColor.ACCENT,
};

export const lightUserCardTheme: UserCardTheme = {
  fg: LightThemeColor.FONT_SUBTITLE,
  bg: LightThemeColor.WHITE,
  owner: LightThemeColor.BLACK,
  jobPosition: LightThemeColor.FONT_TEXT,
  dealer: {
    fg: LightThemeColor.ACCENT_DARK,
    bg: LightThemeColor.WHITE,
  },
  deleteBtn: {
    normal: LightThemeColor.GREY,
    hover: LightThemeColor.PRIMARY,
    active: LightThemeColor.PRIMARY_DARK,
  },
};
export const darkUserCardTheme: UserCardTheme = {
  fg: DarkThemeColor.FONT_SUBTITLE,
  bg: DarkThemeColor.PRIMARY_LIGHT,
  owner: DarkThemeColor.WHITE,
  jobPosition: DarkThemeColor.FONT_TEXT,
  dealer: {
    fg: DarkThemeColor.ACCENT_LIGHT,
    bg: DarkThemeColor.PRIMARY_LIGHT,
  },
  deleteBtn: {
    normal: DarkThemeColor.GREY,
    hover: DarkThemeColor.ACCENT,
    active: DarkThemeColor.ACCENT_DARK,
  },
};

export const lightChatMessageTheme: ChatMessageTheme = {
  ...lightDefaultTheme,
  dateTime: LightThemeColor.BLACK,
};
export const darkChatMessageTheme: ChatMessageTheme = {
  ...darkDefaultTheme,
  dateTime: DarkThemeColor.WHITE,
};

export const lightFormTheme: FormTheme = {
  fg: LightThemeColor.FONT_SUBTITLE,
  bg: LightThemeColor.WHITE,
};
export const darkFormTheme: FormTheme = {
  fg: DarkThemeColor.FONT_SUBTITLE,
  bg: DarkThemeColor.PRIMARY,
};
