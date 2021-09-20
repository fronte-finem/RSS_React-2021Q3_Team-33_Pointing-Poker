import { action, computed, observable, runInAction } from 'mobx';
import {
  GameSettings,
  getDefaultGameSettings,
} from '@shared/api-types/game-settings';
import { Role, User, UsersList, UserToJoin } from '@shared/api-types/user';
import {
  ChatMessage,
  ChatMessagesList,
  KickResult,
  KickVoteInit,
} from '@shared/api-types/chat';
import {
  GameResults,
  Issue,
  IssueScore,
  IssuesList,
} from '@shared/api-types/issue';
import { InitDealer, InitUser } from '@shared/api-types/init';
import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from '@client/themes/themes';

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

export interface GameState {
  page: GamePage;
  theme: DefaultTheme;
  chatIsOpen: boolean;
  chatOldMessages: number;
  id: string;
  title: string;
  selfUserId: string;
  isDealer: boolean;
  users: UsersList;
  messages: ChatMessagesList;
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

export class GameStateActions {
  @observable private _initKick?: string;

  constructor(private gameState: GameState) {}

  @action public initKick(userId: string) {
    runInAction(() => {
      this.gameState.kickInit = userId;
    });
  }

  @action public initKickReset() {
    runInAction(() => {
      this.gameState.kickInit = null;
    });
  }

  public getDealer(): User | undefined {
    return this.gameState.users.find((user) => user.role === Role.DEALER);
  }

  @computed public getGamers(): User[] {
    return this.gameState.users.filter((user) => user.role === Role.GAMER);
  }

  @computed public getSpectators(): User[] {
    return this.gameState.users.filter((user) => user.role === Role.SPECTATOR);
  }

  @computed public getUser(userId: string): User | undefined {
    return this.gameState.users.find((user) => user.id === userId);
  }

  @computed public getUserForKick(): User | undefined {
    const userId = this.gameState.kickVoteInit?.badUserId;
    if (!userId) return undefined;
    return this.getUser(userId);
  }

  @computed public getUserWhoInitKick(): User | undefined {
    const userId = this.gameState.kickVoteInit?.initiatorId;
    if (!userId) return undefined;
    return this.getUser(userId);
  }

  @computed public get messagesCount(): number {
    return this.gameState.messages.length;
  }

  @computed public get newMessagesCount(): number {
    if (this.gameState.chatIsOpen) return 0;
    return this.gameState.messages.length - this.gameState.chatOldMessages;
  }

  @action public openChat() {
    runInAction(() => {
      this.gameState.chatIsOpen = true;
    });
  }

  @action public closeChat() {
    runInAction(() => {
      this.gameState.chatIsOpen = false;
      this.gameState.chatOldMessages = this.gameState.messages.length;
    });
  }

  public toggleTheme(colorTheme: ColorTheme) {
    runInAction(() => {
      switch (colorTheme) {
        case ColorTheme.DARK:
          this.gameState.theme = darkTheme;
          break;
        case ColorTheme.LIGHT:
          this.gameState.theme = lightTheme;
          break;
        default:
          break;
      }
    });
  }

  public reset() {
    runInAction(() => {
      const defaultGameState = getDefaultGameState();
      this.gameState.page = GamePage.ENTRY;
      this.gameState.chatIsOpen = defaultGameState.chatIsOpen;
      this.gameState.chatOldMessages = defaultGameState.chatOldMessages;
      this.gameState.id = defaultGameState.id;
      this.gameState.title = defaultGameState.title;
      this.gameState.selfUserId = defaultGameState.selfUserId;
      this.gameState.isDealer = defaultGameState.isDealer;
      this.gameState.users = defaultGameState.users;
      this.gameState.messages = defaultGameState.messages;
      this.gameState.issues = defaultGameState.issues;
      this.gameState.settings = defaultGameState.settings;
      this.gameState.results = defaultGameState.results;
      this.gameState.allowUserToJoin = defaultGameState.allowUserToJoin;
      this.gameState.kickedReason = defaultGameState.kickedReason;
      this.gameState.gameRun = defaultGameState.gameRun;
      this.gameState.roundRun = defaultGameState.roundRun;
      this.gameState.roundIssueId = defaultGameState.roundIssueId;
      this.gameState.roundProgress = defaultGameState.roundProgress;
      this.gameState.kickVoteRun = defaultGameState.kickVoteRun;
      this.gameState.kickVoteInit = defaultGameState.kickVoteInit;
      this.gameState.kickResult = defaultGameState.kickResult;
    });
  }

  public setKicked(message: string) {
    runInAction(() => {
      this.reset();
      this.gameState.kickedReason = message;
    });
  }

  public startKickVote(kickVoteInit: KickVoteInit) {
    runInAction(() => {
      this.gameState.kickVoteRun = true;
      this.gameState.kickVoteInit = kickVoteInit;
      this.gameState.kickResult = null;
    });
  }

  public endKick(kickResult: KickResult) {
    runInAction(() => {
      this.gameState.kickVoteRun = false;
      this.gameState.kickVoteInit = null;
      this.gameState.kickResult = kickResult;
      if (kickResult.kicked) {
        this.deleteUser(kickResult.badUserId);
      }
    });
  }

  public initDealer(initDealer: InitDealer, selfUserId: string) {
    runInAction(() => {
      this.gameState.page = GamePage.LOBBY;
      this.gameState.id = initDealer.gameId;
      this.gameState.title = initDealer.gameTitle;
      this.gameState.selfUserId = selfUserId;
      this.gameState.isDealer = true;
      this.gameState.settings = initDealer.gameSettings;
      this.gameState.users = initDealer.users;
    });
  }

  public initUser(initUser: InitUser, selfUserId: string) {
    runInAction(() => {
      this.gameState.page = GamePage.LOBBY;
      this.gameState.id = initUser.gameId;
      this.gameState.title = initUser.gameTitle;
      this.gameState.selfUserId = selfUserId;
      this.gameState.isDealer = false;
      this.gameState.users = initUser.users;
      if (initUser.messages) this.gameState.messages = initUser.messages;
      if (initUser.issues) this.gameState.issues = initUser.issues;
      if (initUser.gameResult) this.gameState.results = initUser.gameResult;
      if (initUser.gameSettings)
        this.gameState.settings = initUser.gameSettings;
    });
  }

  public setId(id: string) {
    runInAction(() => {
      this.gameState.id = id;
    });
  }

  public setTitle(title: string) {
    runInAction(() => {
      this.gameState.title = title;
    });
  }

  public setUserId(userId: string) {
    runInAction(() => {
      this.gameState.selfUserId = userId;
    });
  }

  public setUsers(users: UsersList) {
    runInAction(() => {
      this.gameState.users = users;
    });
  }

  public addUser(user: User) {
    runInAction(() => {
      this.gameState.users.push(user);
    });
  }

  public deleteUser(userId: string) {
    runInAction(() => {
      this.gameState.users = this.gameState.users.filter(
        ({ id }) => id !== userId
      );
    });
  }

  public setAllowUserToJoin(
    userToJoin: UserToJoin,
    callback: (allow: boolean) => void
  ) {
    runInAction(() => {
      this.gameState.allowUserToJoin = { userToJoin, callback };
    });
  }

  public setMessages(messages: ChatMessagesList) {
    runInAction(() => {
      this.gameState.messages = messages;
    });
  }

  public addMessage(message: ChatMessage) {
    runInAction(() => {
      this.gameState.messages.push(message);
    });
  }

  public setIssues(issues: IssuesList) {
    runInAction(() => {
      this.gameState.issues = issues;
    });
  }

  public addIssue(issue: Issue) {
    runInAction(() => {
      this.gameState.issues.push(issue);
    });
  }

  public deleteIssue(issueId: string) {
    runInAction(() => {
      this.gameState.issues = this.gameState.issues.filter(
        ({ id }) => id !== issueId
      );
    });
  }

  public modifyIssue(issue: Issue) {
    const index = this.gameState.issues.findIndex(({ id }) => id === issue.id);
    runInAction(() => {
      if (index < 0) {
        this.gameState.issues.push(issue);
      } else {
        this.gameState.issues[index] = issue;
      }
    });
  }

  public setSettings(settings: GameSettings) {
    runInAction(() => {
      this.gameState.settings = settings;
    });
  }

  public setResults(results: GameResults) {
    runInAction(() => {
      this.gameState.results = results;
    });
  }

  public addResult(result: IssueScore) {
    runInAction(() => {
      this.gameState.results.push(result);
    });
  }

  public deleteResult(issueId: string) {
    runInAction(() => {
      this.gameState.results = this.gameState.results.filter(
        (result) => result.issueId !== issueId
      );
    });
  }

  public modifyResult(issueScore: IssueScore) {
    const index = this.gameState.results.findIndex(
      ({ issueId }) => issueId === issueScore.issueId
    );
    runInAction(() => {
      if (index < 0) {
        this.gameState.results.push(issueScore);
      } else {
        this.gameState.results[index] = issueScore;
      }
    });
  }

  public startGame(settings: GameSettings) {
    runInAction(() => {
      this.gameState.page = GamePage.GAME;
      this.gameState.gameRun = true;
      this.gameState.settings = settings;
    });
  }

  public endGame(results: GameResults) {
    runInAction(() => {
      this.gameState.page = GamePage.RESULTS;
      this.gameState.gameRun = false;
      this.gameState.results = results;
    });
  }

  public startRound(issueId: string) {
    runInAction(() => {
      this.gameState.roundRun = true;
      this.gameState.roundProgress = [];
      this.gameState.roundIssueId = issueId;
    });
  }

  public endRound(issueScore: IssueScore) {
    runInAction(() => {
      this.gameState.roundRun = false;
      this.gameState.roundProgress = [];
      this.modifyResult(issueScore);
    });
  }

  public progressRound(userId: string) {
    runInAction(() => {
      this.gameState.roundProgress.push(userId);
    });
  }
}
