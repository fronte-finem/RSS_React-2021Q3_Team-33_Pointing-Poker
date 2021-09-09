import React from 'react';
import { AvatarProps as AntAvatarProps } from 'antd';
import { StyleAvatar } from './avatar-styles';

export interface AvatarContent {
  firstName: string;
  lastName: string;
}

interface AvatarProps {
  content: AvatarContent;
  mod?: AntAvatarProps;
}

export const abbreviateWord = (word: string) =>
  word.trimStart().slice(0, 1).toUpperCase();

export const abbreviateName = (first: string, last: string) =>
  `${abbreviateWord(first)}${abbreviateWord(
    last || first.trimEnd().slice(-1)
  )}`;

export const Avatar: React.FC<AvatarProps> = ({ content, mod }) => {
  const { firstName, lastName } = content;
  return (
    <StyleAvatar {...mod}>{abbreviateName(firstName, lastName)}</StyleAvatar>
  );
};
