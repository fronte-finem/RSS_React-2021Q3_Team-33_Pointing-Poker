import {
  AvatarTheme,
  FormTheme,
  ChatTheme,
  GameCardTheme,
  InputTheme,
  InteractiveColors,
  ModalTheme,
  TimerTheme,
  ToggleTheme,
  UserCardTheme,
  SelectTheme,
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

export const lightSelectTheme: SelectTheme = {
  fg: LightThemeColor.FONT_SUBTITLE,
  bg: LightThemeColor.WHITE,
};
export const darkSelectTheme: SelectTheme = {
  fg: DarkThemeColor.BLACK,
  bg: DarkThemeColor.PRIMARY,
};

export const lightGameCardTheme: GameCardTheme = {
  ...lightDefaultTheme,
  fg: LightThemeColor.FONT_TITLE,
  hover: LightThemeColor.WHITE,
  active: {
    fg: LightThemeColor.WHITE,
    bg: LightThemeColor.PRIMARY,
  },
};
export const darkGameCardTheme: GameCardTheme = {
  ...darkDefaultTheme,
  hover: DarkThemeColor.PRIMARY_LIGHT,
  active: {
    fg: DarkThemeColor.WHITE,
    bg: DarkThemeColor.ACCENT,
  },
};

export const lightTimerTheme: TimerTheme = {
  ...lightDefaultTheme,
  fg: LightThemeColor.FONT_TITLE,
  desc: LightThemeColor.FONT_TEXT,
};
export const darkTimerTheme: TimerTheme = {
  ...darkDefaultTheme,
  fg: DarkThemeColor.FONT_TITLE,
  desc: DarkThemeColor.FONT_TEXT,
};

export const lightModalTheme: ModalTheme = {
  fg: LightThemeColor.FONT_TITLE,
  bg: LightThemeColor.WHITE,
  title: LightThemeColor.FONT_TITLE,
  kick: LightThemeColor.PRIMARY,
};
export const darkModalTheme: ModalTheme = {
  fg: DarkThemeColor.FONT_TITLE,
  bg: DarkThemeColor.PRIMARY,
  title: DarkThemeColor.FONT_TITLE,
  kick: DarkThemeColor.ACCENT,
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

export const lightFormTheme: FormTheme = {
  fg: LightThemeColor.FONT_SUBTITLE,
  bg: LightThemeColor.WHITE,
};
export const darkFormTheme: FormTheme = {
  fg: DarkThemeColor.FONT_SUBTITLE,
  bg: DarkThemeColor.PRIMARY,
};

export const lightChatTheme: ChatTheme = {
  modal: {
    fg: LightThemeColor.BLACK,
    bg: LightThemeColor.WHITE,
    failMessage: LightThemeColor.ACCENT_DARK,
  },
  message: {
    ...lightDefaultTheme,
    dateTime: LightThemeColor.BLACK,
  },
};
export const darkChatTheme: ChatTheme = {
  modal: {
    fg: DarkThemeColor.WHITE,
    bg: DarkThemeColor.PRIMARY,
    failMessage: DarkThemeColor.ACCENT_DARK,
  },
  message: {
    ...darkDefaultTheme,
    dateTime: DarkThemeColor.WHITE,
  },
};
