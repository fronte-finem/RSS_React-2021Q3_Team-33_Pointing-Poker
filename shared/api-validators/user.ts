import Ajv, { JSONSchemaType } from 'ajv';
import addFormats from 'ajv-formats';
import {
  DealerToJoin,
  Role,
  User,
  UserBase,
  UserToJoin,
} from '@shared/api-types/user';

const ajv = new Ajv();
addFormats(ajv, { mode: 'fast' });

const userBaseSchema: JSONSchemaType<UserBase> = {
  type: 'object',
  properties: {
    firstName: { type: 'string', minLength: 1 },
    lastName: { type: 'string', nullable: true },
    jobPosition: { type: 'string', nullable: true },
    avatar: { type: 'string', nullable: true },
  },
  required: ['firstName'],
  additionalProperties: false,
} as const;

const dealerToJoinSchema: JSONSchemaType<DealerToJoin> = {
  type: 'object',
  properties: {
    firstName: { type: 'string', minLength: 1 },
    lastName: { type: 'string', nullable: true },
    jobPosition: { type: 'string', nullable: true },
    avatar: { type: 'string', nullable: true },
    gameTitle: { type: 'string', minLength: 1 },
  },
  required: ['firstName', 'gameTitle'],
} as const;

const userToJoinSchema: JSONSchemaType<UserToJoin> = {
  type: 'object',
  properties: {
    firstName: { type: 'string', minLength: 1 },
    lastName: { type: 'string', nullable: true },
    jobPosition: { type: 'string', nullable: true },
    avatar: { type: 'string', nullable: true },
    role: { type: 'string', enum: [Role.GAMER, Role.SPECTATOR] },
  },
  required: ['firstName', 'role'],
} as const;

const userSchema: JSONSchemaType<User> = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    firstName: { type: 'string', minLength: 1 },
    lastName: { type: 'string', nullable: true },
    jobPosition: { type: 'string', nullable: true },
    avatar: { type: 'string', nullable: true },
    role: { type: 'string', enum: [Role.DEALER, Role.GAMER, Role.SPECTATOR] },
  },
  required: ['id', 'firstName', 'role'],
} as const;

export const validateUserBase = ajv.compile<UserBase>(userBaseSchema);

export const validateDealerToJoin =
  ajv.compile<DealerToJoin>(dealerToJoinSchema);

export const validateUserToJoin = ajv.compile<UserToJoin>(userToJoinSchema);

export const validateUser = ajv.compile<UserToJoin>(userSchema);
