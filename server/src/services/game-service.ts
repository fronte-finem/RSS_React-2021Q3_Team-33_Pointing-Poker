import { UsersService } from '@server/services/user-service';
import { ChatService } from '@server/services/chat-service';
import { DealerToJoin, Role } from '@shared/api-types/user';
import { InitDealer, InitUser } from '@shared/api-types/init';
import {
  GameSettings,
  getDefaultGameSettings,
} from '@shared/api-types/game-settings';
import { randomUUID } from 'crypto';
import {
  PointingPokerServer,
  PointingPokerServerSocket,
} from 'types/server-socket';
import { IssueService } from '@server/services/issue-service';
import { GameResults } from '@shared/api-types/issue';

export class GameService {
  private _userService: UsersService = new UsersService();
  private _chatService: ChatService = new ChatService();
  private _issueService: IssueService = new IssueService();
  private _gameSettings: GameSettings = getDefaultGameSettings();
  private _room: string = randomUUID();
  private _title: string;
  private _isStarted: boolean = false;

  constructor(
    private _server: PointingPokerServer,
    private _dealer: PointingPokerServerSocket,
    { gameTitle, ...userBase }: DealerToJoin
  ) {
    this._title = gameTitle;
    this.userService.addUser(userBase, Role.DEALER, _dealer);
  }

  public destroy(): void {
    this._userService.destroy();
    this._chatService.destroy();
    this._issueService.destroy();
  }

  public get userService(): UsersService {
    return this._userService;
  }

  public get chatService(): ChatService {
    return this._chatService;
  }

  public get issueService(): IssueService {
    return this._issueService;
  }

  public get room(): string {
    return this._room;
  }

  public get title(): string {
    return this._title;
  }

  public get server(): PointingPokerServer {
    return this._server;
  }

  public get dealerSocket(): PointingPokerServerSocket {
    return this._dealer;
  }

  public get gameSettings(): GameSettings {
    return { ...this._gameSettings };
  }

  public changeTitle(title: string): void {
    this._title = title;
  }

  public get needDealerAdmitToJoin(): boolean {
    return this.isStarted && !this._gameSettings.autoJoinToGame;
  }

  public initDealer(): InitDealer {
    return {
      gameId: this._room,
      gameTitle: this._title,
      users: this._userService.getUsers(),
      gameSettings: { ...this._gameSettings },
    };
  }

  public initUser(): InitUser {
    const initUser: InitUser = {
      gameId: this._room,
      gameTitle: this._title,
      users: this._userService.getUsers(),
      messages: this._chatService.getChatMessages(),
    };
    if (this.isStarted) {
      initUser.issues = this._issueService.getIssues();
      initUser.gameSettings = this._gameSettings;
      initUser.gameResult = this._issueService.getResults();
      initUser.roundRun = this.issueService.isRoundActiveRun;
      initUser.roundIssueId = this.issueService.activeId;
      initUser.roundProgress = this.issueService.activeProgress;
    }
    return initUser;
  }

  public get isStarted(): boolean {
    return this._isStarted;
  }

  public startGame(gameSettings: GameSettings): void {
    this._isStarted = true;
    this._gameSettings = gameSettings;
  }

  public endGame(): GameResults {
    this._isStarted = false;
    return this._issueService.getResults();
  }
}
