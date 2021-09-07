import React from 'react';
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd';
import styled from 'styled-components';

interface AvatarContent {
  firstName: string;
  lastName: string;
}

interface AvatarProps {
  content: AvatarContent;
  mod?: AntAvatarProps;
}

const StyleAvatar = styled(AntAvatar)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #60dabf;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: default;

  .ant-avatar-string {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Avatar: React.FC<AvatarProps> = ({ content, mod }) => {
  const { firstName, lastName } = content;
  const userSymbols = `${firstName[0].toUpperCase()}${
    lastName === ''
      ? firstName[firstName.length - 1].toUpperCase()
      : lastName[0].toUpperCase()
  }`;
  const avatar = <StyleAvatar {...mod}>{userSymbols}</StyleAvatar>;
  return avatar;
};
