import { DefaultTheme } from 'styled-components';
import {
  darkDefaultTheme,
  lightDefaultTheme,
} from '@client/themes/default-color-themes';
import {
  darkButtonTheme,
  lightButtonTheme,
} from '@client/themes/button-themes';
import {
  darkHeaderTheme,
  lightHeaderTheme,
} from '@client/themes/header-themes';
import {
  darkFooterTheme,
  lightFooterTheme,
} from '@client/themes/footer-themes';
import {
  darkAvatarTheme,
  darkChatTheme,
  darkGameCardTheme,
  darkInputTheme,
  darkLinkTheme,
  darkModalTheme,
  darkTimerTheme,
  darkToggleTheme,
  darkUserCardTheme,
  lightAvatarTheme,
  lightChatTheme,
  lightGameCardTheme,
  lightInputTheme,
  lightLinkTheme,
  lightModalTheme,
  lightTimerTheme,
  lightToggleTheme,
  lightUserCardTheme,
} from '@client/themes/components-themes';
import {
  darkIssueCardTheme,
  lightIssueCardTheme,
} from '@client/themes/issue-card-themes';
import {
  darkContentTheme,
  lightContentTheme,
} from '@client/themes/content-themes';

export const lightTheme: DefaultTheme = {
  ...lightDefaultTheme,
  link: lightLinkTheme,
  toggle: lightToggleTheme,
  button: lightButtonTheme,
  input: lightInputTheme,
  timer: lightTimerTheme,
  modal: lightModalTheme,
  avatar: lightAvatarTheme,
  gameCard: lightGameCardTheme,
  userCard: lightUserCardTheme,
  issueCard: lightIssueCardTheme,
  chat: lightChatTheme,
  header: lightHeaderTheme,
  footer: lightFooterTheme,
  content: lightContentTheme,
};

export const darkTheme: DefaultTheme = {
  ...darkDefaultTheme,
  link: darkLinkTheme,
  toggle: darkToggleTheme,
  button: darkButtonTheme,
  input: darkInputTheme,
  timer: darkTimerTheme,
  modal: darkModalTheme,
  avatar: darkAvatarTheme,
  gameCard: darkGameCardTheme,
  userCard: darkUserCardTheme,
  issueCard: darkIssueCardTheme,
  chat: darkChatTheme,
  header: darkHeaderTheme,
  footer: darkFooterTheme,
  content: darkContentTheme,
};
