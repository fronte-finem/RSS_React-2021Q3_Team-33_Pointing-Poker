import { runInAction } from 'mobx';
import { GameSettings } from '@shared/api-types/game-settings';
import { User, UsersList, UserToJoin } from '@shared/api-types/user';
import {
  ChatMessage,
  ChatMessagesList,
  KickResult,
  KickVoteInit,
} from '@shared/api-types/chat';
import {
  GameResult,
  Issue,
  IssueScore,
  IssuesList,
} from '@shared/api-types/issue';
import { InitDealer, InitUser } from '@shared/api-types/init';

export const enum GamePage {
  ENTRY = 'entry',
  SETTINGS = 'settings',
  LOBBY = 'lobby',
  GAME = 'game',
  RESULTS = 'results',
}

export interface AllowUserToJoin {
  userToJoin: UserToJoin;
  callback: (allow: boolean) => void;
}

export interface GameState {
  page: GamePage;
  id: string;
  title: string;
  selfUserId: string;
  users: UsersList;
  messages: ChatMessagesList;
  issues: IssuesList;
  settings: null | GameSettings;
  results: GameResult;
  allowUserToJoin: null | AllowUserToJoin;
  kickedReason: null | string;
  gameRun: boolean;
  roundRun: boolean;
  roundIssueId: null | string;
  roundProgress: string[];
  kickVoteRun: boolean;
  kickVoteInit: null | KickVoteInit;
  kickResult: null | KickResult;
}

export const getDefaultGameState = (): GameState => ({
  page: GamePage.ENTRY,
  id: '',
  title: '',
  selfUserId: '',
  users: [],
  messages: [],
  issues: [],
  settings: null,
  results: [],
  allowUserToJoin: null,
  kickedReason: null,
  gameRun: false,
  roundRun: false,
  roundIssueId: null,
  roundProgress: [],
  kickVoteRun: false,
  kickVoteInit: null,
  kickResult: null,
});

export class GameStateActions {
  constructor(private gameState: GameState) {}

  public reset() {
    runInAction(() => {
      this.gameState = getDefaultGameState();
    });
  }

  public setKicked(message: string) {
    runInAction(() => {
      this.gameState = getDefaultGameState();
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
      this.gameState.page = GamePage.SETTINGS;
      this.gameState.id = initDealer.gameId;
      this.gameState.title = initDealer.gameTitle;
      this.gameState.selfUserId = selfUserId;
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

  public setResults(results: GameResult) {
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

  public endGame(results: GameResult) {
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
