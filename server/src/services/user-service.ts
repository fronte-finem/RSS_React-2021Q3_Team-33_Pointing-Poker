import { Role, User, UserBase, UsersList } from '@shared/api-types/user';
import { ApiFailMessage } from '@server/api-fail-message';
import { PointingPokerServerSocket } from 'types/server-socket';
import { KickResult, KickVoteInit } from '@shared/api-types/chat';

export const userEquality = (user1: UserBase, user2: UserBase): boolean =>
  user1.firstName === user2.firstName &&
  user1.lastName === user2.lastName &&
  user1.jobPosition === user2.jobPosition &&
  user1.avatar === user2.avatar;

export type UserX = Omit<User, 'id'> & { socket: PointingPokerServerSocket };

const toUser = ({ socket, ...user }: UserX): User => ({
  ...user,
  id: socket.id,
});

const thatUser =
  (userId: string) =>
  ({ socket }: UserX) =>
    socket.id === userId;

const notThatUser =
  (userId: string) =>
  ({ socket }: UserX) =>
    socket.id !== userId;

const MINIMAL_USERS_NUM_FOR_KICK_VOTE = 3;

interface KickVote {
  userId: string;
  vote: boolean;
}

export class UsersService {
  private _users: UserX[] = [];
  private _kickVotes: KickVote[] = [];
  private _kickVoteStarted: boolean = false;

  public isUserInStore(userData: UserBase): boolean {
    return this._users.some((user) => userEquality(userData, user));
  }

  public addUser(
    userData: UserBase,
    role: Role,
    socket: PointingPokerServerSocket
  ): User {
    if (this.isUserInStore(userData))
      throw new Error(ApiFailMessage.SAME_USER_ALREADY_EXIST);
    const newUser: UserX = { ...userData, role, socket };
    this._users.push(newUser);
    return { ...userData, role, id: socket.id };
  }

  public getUserX(userId: string): UserX | undefined {
    const user = this._users.find(thatUser(userId));
    return user && { ...user };
  }

  public getUserSocket(userId: string): PointingPokerServerSocket | undefined {
    return this.getUserX(userId)?.socket;
  }

  public getUser(userId: string): User | undefined {
    const userX = this.getUserX(userId);
    return userX && toUser(userX);
  }

  public getUsers(): UsersList {
    return this._users.map(toUser);
  }

  public deleteUser(userId: string): void {
    this._users = this._users.filter(notThatUser(userId));
  }

  public get kickVoteStarted(): boolean {
    return this._kickVoteStarted;
  }

  public get kickVotersNum(): number {
    // Dealer don't count in voters
    return this._users.length - 2;
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
    this._users = [];
  }
}
