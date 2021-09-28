import {
  GameSettings,
  getDefaultGameSettings,
} from '@shared/api-types/game-settings';
import { User, UserToJoin } from '@shared/api-types/user';
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

export interface GameState {
  page: GamePage;
  theme: DefaultTheme;
  id: string;
  title: string;
  selfUserId: string;
  isDealer: boolean;
  users: UserFE[];
  issues: IssuesList;
  settings: GameSettings;
  results: GameResults;
  allowUserToJoin: null | AllowUserToJoin;
  kickedReason: null | string;
  gameRun: boolean;
  roundRun: boolean;
  roundIssueId: null | string;
  roundProgress: string[];
}

export const getDefaultGameState = (): GameState => ({
  page: GamePage.ENTRY,
  theme: lightTheme,
  id: '',
  title: '',
  selfUserId: '',
  isDealer: false,
  users: [],
  issues: [],
  settings: getDefaultGameSettings(),
  results: [],
  allowUserToJoin: null,
  kickedReason: null,
  gameRun: false,
  roundRun: false,
  roundIssueId: null,
  roundProgress: [],
});
