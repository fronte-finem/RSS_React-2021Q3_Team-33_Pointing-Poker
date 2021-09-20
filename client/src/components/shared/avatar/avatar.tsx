import React from 'react';
import { AvatarProps as AntAvatarProps } from 'antd';
import { UserBase } from '@shared/api-types/user';
import { StyleAvatar } from './avatar-styles';

export const abbreviateWord = (word: string) =>
  word.trimStart().slice(0, 1).toUpperCase();

export const abbreviateName = ({ firstName, lastName }: UserBase) =>
  `${abbreviateWord(firstName)}${abbreviateWord(
    lastName || firstName.trimEnd().slice(-1)
  )}`;

type AvatarProps = { user: UserBase } & AntAvatarProps;

export const Avatar: React.FC<AvatarProps> = ({ user, ...props }) => {
  return <StyleAvatar {...props}>{abbreviateName(user)}</StyleAvatar>;
};
