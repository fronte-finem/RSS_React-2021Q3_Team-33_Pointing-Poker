// type Role = 'gamer' | 'spectator';
// type FullRole = Role | 'dealer';

/**
 * Все возможные роли пользователя игры.
 */
export const enum Role {
  DEALER = 'dealer',
  GAMER = 'gamer',
  SPECTATOR = 'spectator',
}
/**
 * Роли возможные для пользователя присоединяющегося к игре.
 */
export type RoleUserToJoin = Exclude<Role, Role.DEALER>;

/**
 * Базовый объект пользователя без определенной роли
 */
export interface UserBase {
  firstName: string;
  lastName?: string;
  jobPosition?: string;
  avatar?: string;
}

/**
 * Объект, ожидаемый сервером при запросе создания игры.
 */
export interface DealerToJoin extends UserBase {
  gameTitle: string;
}

/**
 * Объект, ожидаемый сервером при запросе присоединения к игре.
 */
export interface UserToJoin extends UserBase {
  role: RoleUserToJoin;
}

/**
 * Объект пользователя игры (дилер/игрок/наблюдатель),
 *  возвращаемый сервером при различных событиях.
 */
export interface User extends UserBase {
  /**
   * @format uuid
   */
  id: string;
  role: Role;
}

/**
 * Массив пользователей в игре.
 */
export type UsersList = Array<User>;
