import { IUsersService, UsersService } from '@server/services/user-service';
import {
  DealerToJoin,
  Role,
  User,
  UserBase,
  UsersList,
} from '@shared/api-types/user';
import { InitDealer, InitUser } from '@shared/api-types/init';
import { CardsSetDefault, GameSettings } from '@shared/api-types/game-settings';
import { randomUUID } from 'crypto';
import { PointingPokerServer, PointingPokerServerSocket } from '@server/types';
import { ChatMessage, ChatMessagesList } from '@shared/api-types/chat';
import { ChatService, IChatService } from '@server/services/chat-service';

const getDefaultGameSettings = (): GameSettings => ({
  dealerGamer: false,
  cardsSet: CardsSetDefault.FIBONACCI,
  autoJoinToGame: true,
  autoOpenCards: true,
  changeAfterRoundEnd: false,
  timeout: undefined,
});

export class GameService implements IChatService {
  private _userService: IUsersService = new UsersService();
  private _chatService: IChatService = new ChatService();
  private _gameSettings: GameSettings = getDefaultGameSettings();
  private _room: string = randomUUID();
  private _title: string;
  private _isStarted: boolean = false;

  constructor(
    private _server: PointingPokerServer,
    private _dealer: PointingPokerServerSocket,
    dealerToJoin: DealerToJoin
  ) {
    this._title = dealerToJoin.gameTitle;
    this.addUser(dealerToJoin, _dealer.id, Role.DEALER);
  }

  public get room(): string {
    return this._room;
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

  public get isStarted(): boolean {
    return this._isStarted;
  }

  public get needDealerAdmitToJoin(): boolean {
    return this.isStarted && !this._gameSettings.autoJoinToGame;
  }

  public addMessage(userId: string, message: string): ChatMessage {
    return this._chatService.addMessage(userId, message);
  }

  public getChatMessages(): ChatMessagesList {
    return this._chatService.getChatMessages();
  }

  public isUserInStore(userData: UserBase): boolean {
    return this._userService.isUserInStore(userData);
  }

  public addUser(userData: UserBase, id: string, role: Role): User {
    return this._userService.addUser(userData, id, role);
  }

  public deleteUser(userId: string): void {
    this._userService.deleteUser(userId);
  }

  public getUser(userId: string): User | undefined {
    return this._userService.getUser(userId);
  }

  public getUsers(): UsersList {
    return this._userService.getUsers();
  }

  public initDealer(): InitDealer {
    return {
      gameId: this._room,
      users: this._userService.getUsers(),
      gameSettings: { ...this._gameSettings },
    };
  }

  public initUser(): InitUser {
    const initUser: InitUser = {
      gameId: this._room,
      gameTitle: this._title,
      users: this._userService.getUsers(),
    };
    if (!this.isStarted) {
      initUser.messages = this._chatService.getChatMessages();
    } else {
      initUser.gameSettings = this._gameSettings;
      initUser.gameResult = [];
    }
    return initUser;
  }

  public destroy(): void {
    this._userService.destroy();
    this._chatService.destroy();
  }
}
