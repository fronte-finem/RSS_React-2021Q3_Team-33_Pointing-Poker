import { User } from '@shared/api-types/user';

export const userFormat = (user?: User) => {
  if (!user) return 'Unknown User';
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
};
