import { Role, User, UserBase, UsersList } from '@shared/api-types/user';
import { ApiFailMessage } from '@server/api-fail-message';

export const userEquality = (user1: UserBase, user2: UserBase): boolean =>
  user1.firstName === user2.firstName &&
  user1.lastName === user2.lastName &&
  user1.jobPosition === user2.jobPosition &&
  user1.avatar === user2.avatar;

export interface IUsersService {
  isUserInStore(userData: UserBase): boolean;
  addUser(userData: UserBase, id: string, role: Role): User;
  getUser(userId: string): User | undefined;
  getUsers(): UsersList;
  deleteUser(userId: string): void;
  destroy(): void;
}

export class UsersService implements IUsersService {
  private _users: UsersList = [];

  public isUserInStore(userData: UserBase): boolean {
    return this._users.some((user) => userEquality(userData, user));
  }

  public addUser(userData: UserBase, id: string, role: Role): User {
    if (this.isUserInStore(userData))
      throw new Error(ApiFailMessage.SAME_USER_ALREADY_EXIST);
    const newUser: User = { ...userData, id, role };
    this._users.push(newUser);
    return { ...newUser };
  }

  public getUser(userId: string): User | undefined {
    const user = this._users.find(({ id }) => id === userId);
    return user && { ...user };
  }

  public getUsers(): UsersList {
    return this._users.map((user) => ({ ...user }));
  }

  public deleteUser(userId: string): void {
    this._users = this._users.filter(({ id }) => id === userId);
  }

  public destroy(): void {
    this._users = [];
  }
}
