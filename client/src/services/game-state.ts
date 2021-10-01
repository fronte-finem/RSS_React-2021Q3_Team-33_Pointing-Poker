import { action, computed, makeObservable, observable } from 'mobx';
import {
  GameSettings,
  GameStartPayload,
  getDefaultGameSettings,
} from '@shared/api-types/game-settings';
import { Role, User, UserToJoin } from '@shared/api-types/user';
import {
  GameResults,
  Issue,
  IssueScore,
  RoundResults,
} from '@shared/api-types/issue';
import {
  calcStats,
  CardStats,
  countScores,
  IssueStats,
  IssueStatsMap,
} from '@client/utils/issue-stats';
import { KickResult } from '@shared/api-types/chat';
import { InitDealer, InitUser } from '@shared/api-types/init';
import {
  CardScore,
  ExtraScoreKind,
} from '@shared/api-types/game-card-settings';

export const enum AppMode {
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
  @observable public appMode!: AppMode;
  @observable public id!: string;
  @observable public title!: string;
  @observable public selfUserId!: string;
  @observable public isDealer!: boolean;
  @observable public users!: UserFE[];
  @observable public issues!: Issue[];
  @observable public settings!: GameSettings;
  @observable public results!: GameResults;
  @observable public roundRun!: boolean;
  @observable public roundIssueId!: null | string;
  @observable public roundProgress!: string[];

  private init() {
    this.appMode = AppMode.ENTRY;
    this.id = '';
    this.title = '';
    this.selfUserId = '';
    this.isDealer = false;
    this.users = [];
    this.issues = [];
    this.settings = getDefaultGameSettings();
    this.results = [];
    this.roundRun = false;
    this.roundIssueId = null;
    this.roundProgress = [];
  }

  constructor() {
    this.init();
    makeObservable(this);
  }

  @computed public get isModeEntry() {
    return this.appMode === AppMode.ENTRY;
  }

  @computed public get isModeLobby() {
    return this.appMode === AppMode.LOBBY;
  }

  @computed public get isModeLobbyDealer() {
    return this.isModeLobby && this.isDealer;
  }

  @computed public get isModeGame() {
    return this.appMode === AppMode.GAME;
  }

  @computed public get isModeGameDealer() {
    return this.isModeGame && this.isDealer;
  }

  @computed public get isModeResults() {
    return this.appMode === AppMode.RESULTS;
  }

  @computed public get gameStartPayload(): GameStartPayload {
    const { issues, settings } = this;
    return { issues, settings };
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
    this.appMode = AppMode.LOBBY;
    this.isDealer = true;
    this.id = initDealer.gameId;
    this.title = initDealer.gameTitle;
    this.selfUserId = selfUserId;
    this.settings = initDealer.gameSettings;
    this.users = initDealer.users;
  }

  @action public initUser(initUser: InitUser, selfUserId: string) {
    this.appMode = AppMode.LOBBY;
    this.isDealer = false;
    this.id = initUser.gameId;
    this.title = initUser.gameTitle;
    this.selfUserId = selfUserId;
    this.users = initUser.users;
    this.issues = initUser.issues || [];
    this.results = initUser.gameResult || [];
    this.settings = initUser.gameSettings || this.settings;
  }

  @action public addUser(user: User) {
    this.users.push(user);
  }

  @action public initIssues(issues: Issue[]) {
    this.issues = issues;
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

  public getIssues(withCurrent = false): Issue[] {
    if (withCurrent) return this.issues;
    return this.issues.filter(({ id }) => id !== this.roundIssueId);
  }

  public getIssue(issueId: string): Issue | undefined {
    return this.issues.find(({ id }) => id === issueId);
  }

  public get currentIssue(): Issue | undefined {
    if (!this.roundIssueId) return undefined;
    return this.getIssue(this.roundIssueId);
  }

  @action public initResults(results: IssueScore[]) {
    this.results = results;
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

  public isHaveStats(issueId: string): boolean {
    return this.results.some((results) => results.issueId === issueId);
  }

  public getIssueScores(issueId: string): RoundResults {
    return (
      this.results.find((results) => results.issueId === issueId)?.scores || []
    );
  }

  @computed public get isAllIssuesRated() {
    return this.issues.length === this.results.length;
  }

  @action public startGame({ issues, settings }: GameStartPayload) {
    this.appMode = AppMode.GAME;
    this.issues = issues;
    this.settings = settings;
  }

  @action public endGame(results: GameResults) {
    this.appMode = AppMode.RESULTS;
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

  @action public setCardsDeck(cardsSet: number[]) {
    this.settings.cardsDeck = cardsSet;
  }

  @action public setCardsDeckExtras(cardsSet: ExtraScoreKind[]) {
    this.settings.cardsDeckExtras = cardsSet;
  }

  @action public setScoreType(scoreType: string) {
    this.settings.cardsScoreType = scoreType;
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

  @computed public get cardsDeck(): CardScore[] {
    return [...this.settings.cardsDeckExtras, ...this.settings.cardsDeck];
  }

  private get statisticsMap(): IssueStatsMap[] {
    return this.results.map(({ issueId, scores }) => ({
      issueId,
      stats: countScores(scores),
    }));
  }

  public getStatistics(): IssueStats[] {
    return this.statisticsMap
      .map(({ issueId, stats }) => ({
        issue: this.getIssue(issueId),
        stats: calcStats(stats),
      }))
      .filter((item): item is IssueStats => item.issue !== undefined);
  }

  public getIssueStats(issueId: string): CardStats[] {
    const scores = this.getIssueScores(issueId);
    const statsMap = countScores(scores);
    return calcStats(statsMap);
  }

  public isInProgress(userId: string): boolean {
    return this.roundProgress.some((id) => id === userId);
  }

  public getScore(userId: string): CardScore {
    if (!this.currentIssue) return undefined;
    return this.getIssueScores(this.currentIssue.id).find(
      (userScore) => userScore.userId === userId
    )?.score;
  }
}
