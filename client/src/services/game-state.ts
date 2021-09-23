import { action, makeObservable, observable } from 'mobx';
import {
  GameSettings,
  getDefaultGameSettings,
} from '@shared/api-types/game-settings';
import { Role, User, UserToJoin } from '@shared/api-types/user';
import { GameResults, Issue, IssueScore } from '@shared/api-types/issue';
import { KickResult } from '@shared/api-types/chat';
import { InitDealer, InitUser } from '@shared/api-types/init';
import {
  CardsSetType,
  getScoreSequence,
} from '@client/utils/get-score-sequence';

export const enum GamePage {
  ENTRY = 'entry',
  LOBBY = 'lobby',
  GAME = 'game',
  RESULTS = 'results',
}

export interface AllowUserToJoin {
  userToJoin: UserToJoin;
  callback: (allow: boolean) => void;
}

export interface UserFE extends User {
  kicked?: { reason: string };
  disconnected?: boolean;
}

export class GameState {
  @observable public page!: GamePage;
  @observable public id!: string;
  @observable public title!: string;
  @observable public selfUserId!: string;
  @observable public isDealer!: boolean;
  @observable public users!: UserFE[];
  @observable public issues!: Issue[];
  @observable public settings!: GameSettings;
  @observable public results!: GameResults;
  @observable public gameRun!: boolean;
  @observable public roundRun!: boolean;
  @observable public roundIssueId!: null | string;
  @observable public roundProgress!: string[];

  private init() {
    this.page = GamePage.ENTRY;
    this.id = '';
    this.title = '';
    this.selfUserId = '';
    this.isDealer = false;
    this.users = [];
    this.issues = [];
    this.settings = getDefaultGameSettings();
    this.results = [];
    this.gameRun = false;
    this.roundRun = false;
    this.roundIssueId = null;
    this.roundProgress = [];
  }

  constructor() {
    this.init();
    makeObservable(this);
  }

  @action public reset() {
    this.init();
  }

  @action public setId(gameId: string) {
    this.id = gameId;
  }

  @action public setTitle(gameTitle: string) {
    this.title = gameTitle;
  }

  public getUsers(online = true): UserFE[] {
    return online
      ? this.users.filter(({ disconnected }) => !disconnected)
      : this.users;
  }

  public getDealer(): User | undefined {
    return this.users.find((user) => user.role === Role.DEALER);
  }

  public getUser(userId: string): UserFE | undefined {
    return this.users.find((user) => user.id === userId);
  }

  private getUserIndex(userId: string): number {
    return this.users.findIndex((user) => user.id === userId);
  }

  public getGamers(online = true): UserFE[] {
    return this.getUsers(online).filter((user) => user.role === Role.GAMER);
  }

  public getSpectators(online = true): UserFE[] {
    return this.getUsers(online).filter((user) => user.role === Role.SPECTATOR);
  }

  public formatUser(userId?: string): string {
    const unknown = `"unknown user-id: (${userId})"`;
    if (!userId) return unknown;
    const user = this.getUser(userId);
    if (!user) return unknown;
    const { firstName, lastName } = user;
    return `${firstName} ${lastName || ''}`;
  }

  @action public setUserKickResult({ badUserId, kicked, reason }: KickResult) {
    if (!kicked) return;
    const index = this.getUserIndex(badUserId);
    if (index < 0) return;
    this.users[index].kicked = { reason };
  }

  @action public setUserDisconnected(userId: string) {
    const index = this.getUserIndex(userId);
    if (index < 0) return;
    this.users[index].disconnected = true;
  }

  @action public initDealer(initDealer: InitDealer, selfUserId: string) {
    this.page = GamePage.LOBBY;
    this.id = initDealer.gameId;
    this.title = initDealer.gameTitle;
    this.selfUserId = selfUserId;
    this.isDealer = true;
    this.settings = initDealer.gameSettings;
    this.users = initDealer.users;
  }

  @action public initUser(initUser: InitUser, selfUserId: string) {
    this.page = GamePage.LOBBY;
    this.id = initUser.gameId;
    this.title = initUser.gameTitle;
    this.selfUserId = selfUserId;
    this.isDealer = false;
    this.users = initUser.users;
    this.issues = initUser.issues || [];
    this.results = initUser.gameResult || [];
    this.settings = initUser.gameSettings || this.settings;
  }

  @action public addUser(user: User) {
    this.users.push(user);
  }

  @action public addIssue(issue: Issue) {
    this.issues.push(issue);
  }

  @action public deleteIssue(issueId: string) {
    this.issues = this.issues.filter(({ id }) => id !== issueId);
  }

  @action public modifyIssue(issue: Issue) {
    const index = this.issues.findIndex(({ id }) => id === issue.id);
    if (index < 0) {
      this.issues.push(issue);
    } else {
      this.issues[index] = issue;
    }
  }

  @action public addResult(result: IssueScore) {
    this.results.push(result);
  }

  @action public deleteResult(issueId: string) {
    this.results = this.results.filter((result) => result.issueId !== issueId);
  }

  @action public modifyResult(issueScore: IssueScore) {
    const index = this.results.findIndex(
      ({ issueId }) => issueId === issueScore.issueId
    );
    if (index < 0) {
      this.results.push(issueScore);
    } else {
      this.results[index] = issueScore;
    }
  }

  @action public startGame(settings: GameSettings) {
    this.page = GamePage.GAME;
    this.gameRun = true;
    this.settings = settings;
  }

  @action public endGame(results: GameResults) {
    this.page = GamePage.RESULTS;
    this.gameRun = false;
    this.results = results;
  }

  @action public startRound(issueId: string) {
    this.roundRun = true;
    this.roundProgress = [];
    this.roundIssueId = issueId;
  }

  @action public endRound(issueScore: IssueScore) {
    this.roundRun = false;
    this.modifyResult(issueScore);
  }

  @action public progressRound(userId: string) {
    this.roundProgress.push(userId);
  }

  @action public setCardSet(cardsSetType: CardsSetType) {
    this.settings.cardsSet = getScoreSequence(cardsSetType);
  }

  @action public setScoreType(scoreType: string) {
    this.settings.scoreType = scoreType;
  }

  @action public setAutoJoinToGame(autoJoinToGame: boolean) {
    this.settings.autoJoinToGame = autoJoinToGame;
  }

  @action public setAutoOpenCards(autoOpenCards: boolean) {
    this.settings.autoOpenCards = autoOpenCards;
  }

  @action public setChangeAfterRoundEnd(changeAfterRoundEnd: boolean) {
    this.settings.changeAfterRoundEnd = changeAfterRoundEnd;
  }

  @action public setDealerGamer(dealerGamer: boolean) {
    this.settings.dealerGamer = dealerGamer;
  }

  @action public setTimeout(timeout?: number) {
    this.settings.timeout = timeout;
  }

  @action public setIssues(issues: Issue[]) {
    this.issues = issues;
  }
}
