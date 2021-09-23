import { computed, runInAction } from 'mobx';
import { Role, User, UsersList, UserToJoin } from '@shared/api-types/user';
import { KickResult } from '@shared/api-types/chat';
import { InitDealer, InitUser } from '@shared/api-types/init';
import {
  GameResults,
  Issue,
  IssueScore,
  IssuesList,
} from '@shared/api-types/issue';
import { GameSettings } from '@shared/api-types/game-settings';
import {
  GamePage,
  GameState,
  getDefaultGameState,
  UserFE,
} from '@client/services/game-state';

export const filterOnlineUser = (
  { disconnected }: UserFE,
  withOffline = true
) => {
  if (withOffline) return !!disconnected;
  return !disconnected;
};

export class GameStateActions {
  constructor(private gameState: GameState) {}

  public getDealer(): User | undefined {
    return this.gameState.users.find((user) => user.role === Role.DEALER);
  }

  @computed
  public getUsers(withOffline = true): UserFE[] {
    return this.gameState.users.filter(
      (user) => filterOnlineUser(user, withOffline) && user.role !== Role.DEALER
    );
  }

  @computed
  public getGamers(withOffline = true): UserFE[] {
    return this.gameState.users.filter(
      (user) => filterOnlineUser(user, withOffline) && user.role === Role.GAMER
    );
  }

  @computed
  public getSpectators(withOffline = true): UserFE[] {
    return this.gameState.users.filter(
      (user) =>
        filterOnlineUser(user, withOffline) && user.role === Role.SPECTATOR
    );
  }

  @computed
  public getUser(userId: string): UserFE | undefined {
    return this.gameState.users.find((user) => user.id === userId);
  }

  @computed
  public formatUser(userId?: string): string {
    const unknown = `"unknown user-id: (${userId})"`;
    if (!userId) return unknown;
    const user = this.getUser(userId);
    if (!user) return unknown;
    const { firstName, lastName } = user;
    return `${firstName} ${lastName || ''}`;
  }

  public reset() {
    runInAction(() => {
      const defaultGameState = getDefaultGameState();
      this.gameState.page = GamePage.ENTRY;
      this.gameState.id = defaultGameState.id;
      this.gameState.title = defaultGameState.title;
      this.gameState.selfUserId = defaultGameState.selfUserId;
      this.gameState.isDealer = defaultGameState.isDealer;
      this.gameState.users = defaultGameState.users;
      this.gameState.issues = defaultGameState.issues;
      this.gameState.settings = defaultGameState.settings;
      this.gameState.results = defaultGameState.results;
      this.gameState.allowUserToJoin = defaultGameState.allowUserToJoin;
      this.gameState.kickedReason = defaultGameState.kickedReason;
      this.gameState.gameRun = defaultGameState.gameRun;
      this.gameState.roundRun = defaultGameState.roundRun;
      this.gameState.roundIssueId = defaultGameState.roundIssueId;
      this.gameState.roundProgress = defaultGameState.roundProgress;
    });
  }

  public setKicked(message: string) {
    runInAction(() => {
      this.reset();
      this.gameState.kickedReason = message;
    });
  }

  private getUserIndex(userId: string): number {
    return this.gameState.users.findIndex((user) => user.id === userId);
  }

  public formatKickResult(result: KickResult): null | string {
    const { badUserId, reason } = result;
    const userName = this.formatUser(badUserId);
    if (!userName) return null;
    return `${userName} - ${reason}`;
  }

  public setUserKickResult({ badUserId, kicked, reason }: KickResult) {
    runInAction(() => {
      if (kicked) {
        const index = this.getUserIndex(badUserId);
        if (index < 0) return;
        this.gameState.users[index].kicked = { reason };
      }
    });
  }

  public setUserDisconnected(userId: string) {
    runInAction(() => {
      const index = this.getUserIndex(userId);
      if (index < 0) return;
      this.gameState.users[index].disconnected = true;
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
