import { Role, User, UserBase, UsersList } from '@shared/api-types/user';
import { ApiFailMessage } from '@server/api-fail-message';
import { PointingPokerServerSocket } from 'types/server-socket';

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

export interface IUsersService {
  isUserInStore(userData: UserBase): boolean;
  addUser(
    userData: UserBase,
    role: Role,
    socket: PointingPokerServerSocket
  ): User;
  getUserX(userId: string): UserX | undefined;
  getUser(userId: string): User | undefined;
  getUserSocket(userId: string): PointingPokerServerSocket | undefined;
  getUsers(): UsersList;
  deleteUser(userId: string): void;
  destroy(): void;
}

export class UsersService implements IUsersService {
  private _users: UserX[] = [];

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

  public destroy(): void {
    this._users = [];
  }
}
