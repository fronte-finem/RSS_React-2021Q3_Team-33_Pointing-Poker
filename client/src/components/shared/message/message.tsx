import React from 'react';
import {
  UserCard,
  UserCardProps,
} from '@client/components/shared/user-card/user-card';
import { StyleMessage, StyleMessageBody } from './message-styles';

export interface MessageProps extends UserCardProps {
  message: string;
}

export const Message: React.FC<MessageProps> = (props) => {
  const { firstName, lastName, position, isOwner, isDelete, message, avatar } =
    props;

  return (
    <StyleMessage>
      <StyleMessageBody>{message}</StyleMessageBody>
      <UserCard
        firstName={firstName}
        lastName={lastName}
        position={position}
        isOwner={isOwner}
        isDelete={isDelete}
        avatar={avatar}
      />
    </StyleMessage>
  );
};
