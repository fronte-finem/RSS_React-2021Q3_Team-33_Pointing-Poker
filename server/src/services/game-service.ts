import {
  IUsersService,
  UsersService,
  UserX,
} from '@server/services/user-service';
import {
  DealerToJoin,
  Role,
  User,
  UserBase,
  UsersList,
} from '@shared/api-types/user';
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
import {
  ChatMessage,
  ChatMessagesList,
  KickResult,
  KickVoteInit,
} from '@shared/api-types/chat';
import { ChatService, IChatService } from '@server/services/chat-service';

const MINIMAL_USERS_NUM_FOR_KICK_VOTE = 3;

interface KickVote {
  userId: string;
  vote: boolean;
}

export class GameService implements IChatService {
  private _userService: IUsersService = new UsersService();
  private _chatService: IChatService = new ChatService();
  private _gameSettings: GameSettings = getDefaultGameSettings();
  private _room: string = randomUUID();
  private _title: string;
  private _isStarted: boolean = false;
  private _kickVotes: KickVote[] = [];
  private _kickVoteStarted: boolean = false;

  constructor(
    private _server: PointingPokerServer,
    private _dealer: PointingPokerServerSocket,
    { gameTitle, ...userBase }: DealerToJoin
  ) {
    this._title = gameTitle;
    this.addUser(userBase, Role.DEALER, _dealer);
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

  public addUser(
    userData: UserBase,
    role: Role,
    socket: PointingPokerServerSocket
  ): User {
    return this._userService.addUser(userData, role, socket);
  }

  public deleteUser(userId: string): void {
    this._userService.deleteUser(userId);
  }

  public getUser(userId: string): User | undefined {
    return this._userService.getUser(userId);
  }

  public getUserX(userId: string): UserX | undefined {
    return this._userService.getUserX(userId);
  }

  public getUserSocket(userId: string): PointingPokerServerSocket | undefined {
    return this._userService.getUserSocket(userId);
  }

  public getUsers(): UsersList {
    return this._userService.getUsers();
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
    };
    if (!this.isStarted) {
      initUser.messages = this._chatService.getChatMessages();
    } else {
      initUser.gameSettings = this._gameSettings;
      initUser.gameResult = [];
    }
    return initUser;
  }

  public get kickVoteStarted(): boolean {
    return this._kickVoteStarted;
  }

  public get kickVotersNum(): number {
    // Dealer don't count in voters
    return this.getUsers().length - 2;
  }

  public canStartKickVote(): boolean {
    return (
      !this._kickVoteStarted &&
      this.kickVotersNum >= MINIMAL_USERS_NUM_FOR_KICK_VOTE
    );
  }

  public startKickVote(badUserId: string, initiatorId: string): KickVoteInit {
    this._kickVotes = [];
    this._kickVoteStarted = true;
    return {
      badUserId,
      initiatorId,
    };
  }

  public getKickResult(
    badUserId: string,
    kicked: boolean,
    byWhom: string
  ): KickResult {
    this._kickVotes = [];
    this._kickVoteStarted = false;
    return {
      kicked,
      badUserId,
      reason: `${kicked ? 'Kicked' : 'Not kicked'} by ${byWhom}`,
    };
  }

  public addKickVote(userId: string, vote: boolean): null | KickResult {
    if (!this._kickVoteStarted) return null;
    this._kickVotes.push({ userId, vote });
    const half = Math.floor(this.kickVotersNum / 2);
    const yes = this._kickVotes.filter((arg) => arg.vote).length;
    const no = this._kickVotes.filter((arg) => !arg.vote).length;
    if (yes > half) {
      return this.getKickResult(userId, true, 'majority of votes');
    }
    if (no > half) {
      return this.getKickResult(userId, false, 'majority of votes');
    }
    return null;
  }

  public destroy(): void {
    this._userService.destroy();
    this._chatService.destroy();
  }
}
