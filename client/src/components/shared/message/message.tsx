import React from 'react';
import styled from 'styled-components';
import { UserCard } from '../card/user-card/user-card';

interface MessageProps {
  firstName: string;
  lastName: string;
  position: string;
  isOwner: boolean;
  isDelete: boolean;
  message: string;
  avatar: string;
}

const StyleMessage = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1140px;
`;

const StyleMessageBody = styled.div`
  padding: 15px 6px 10px 13px;
  display: flex;
  width: 100%;
  max-width: 640px;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
  color: #000000;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0px 0px 20px;
  z-index: 2;
`;

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
