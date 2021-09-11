import { runInAction } from 'mobx';
import { GameSettings } from '@shared/api-types/game-settings';
import { User, UsersList } from '@shared/api-types/user';
import { ChatMessage, ChatMessagesList } from '@shared/api-types/chat';
import {
  GameResult,
  Issue,
  IssueScore,
  IssuesList,
} from '@shared/api-types/issue';
import { InitDealer, InitUser } from '@shared/api-types/init';

export interface GameState {
  id: string;
  title: string;
  userId: string;
  users: UsersList;
  messages: ChatMessagesList;
  issues: IssuesList;
  settings: GameSettings;
  results: GameResult;
}

export class GameStateActions {
  constructor(private gameState: GameState) {}

  public initDealer(initDealer: InitDealer) {
    runInAction(() => {
      this.gameState.id = initDealer.gameId;
      this.gameState.title = initDealer.gameTitle;
      this.gameState.settings = initDealer.gameSettings;
      this.gameState.users = initDealer.users;
    });
  }

  public initUser(initUser: InitUser) {
    runInAction(() => {
      this.gameState.id = initUser.gameId;
      this.gameState.title = initUser.gameTitle;
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
      this.gameState.userId = userId;
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
        ({ id }) => id === userId
      );
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
        ({ id }) => id === issueId
      );
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
        (result) => result.issueId === issueId
      );
    });
  }

  public modifyResult(result: IssueScore) {
    const index = this.gameState.results.findIndex(
      ({ issueId }) => issueId === result.issueId
    );
    runInAction(() => {
      if (index < 0) {
        this.gameState.results.push(result);
      } else {
        this.gameState.results[index] = result;
      }
    });
  }
}
