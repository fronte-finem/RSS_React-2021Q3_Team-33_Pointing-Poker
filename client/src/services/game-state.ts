import {
  GameSettings,
  getDefaultGameSettings,
} from '@shared/api-types/game-settings';
import { User, UserToJoin } from '@shared/api-types/user';
import { ChatMessage, KickResult, KickVoteInit } from '@shared/api-types/chat';
import { GameResults, IssuesList } from '@shared/api-types/issue';
import { DefaultTheme } from 'styled-components';
import { lightTheme } from '@client/themes/themes';

export const enum GamePage {
  ENTRY = 'entry',
  LOBBY = 'lobby',
  GAME = 'game',
  RESULTS = 'results',
}

export const enum ColorTheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface AllowUserToJoin {
  userToJoin: UserToJoin;
  callback: (allow: boolean) => void;
}

export interface UserFE extends User {
  kicked?: { reason: string };
  disconnected?: boolean;
}

export interface ChatMessageFE extends ChatMessage {
  isKickMessage?: boolean;
}

export interface GameState {
  page: GamePage;
  theme: DefaultTheme;
  chatIsOpen: boolean;
  chatOldMessages: number;
  id: string;
  title: string;
  selfUserId: string;
  isDealer: boolean;
  users: UserFE[];
  messages: ChatMessageFE[];
  issues: IssuesList;
  settings: GameSettings;
  results: GameResults;
  allowUserToJoin: null | AllowUserToJoin;
  kickedReason: null | string;
  gameRun: boolean;
  roundRun: boolean;
  roundIssueId: null | string;
  roundProgress: string[];
  kickInit: null | string;
  kickVoteRun: boolean;
  kickVoteInit: null | KickVoteInit;
  kickResult: null | KickResult;
}

export const getDefaultGameState = (): GameState => ({
  page: GamePage.ENTRY,
  theme: lightTheme,
  chatIsOpen: false,
  chatOldMessages: 0,
  id: '',
  title: '',
  selfUserId: '',
  isDealer: false,
  users: [],
  messages: [],
  issues: [],
  settings: getDefaultGameSettings(),
  results: [],
  allowUserToJoin: null,
  kickedReason: null,
  gameRun: false,
  roundRun: false,
  roundIssueId: null,
  roundProgress: [],
  kickInit: null,
  kickVoteRun: false,
  kickVoteInit: null,
  kickResult: null,
});
