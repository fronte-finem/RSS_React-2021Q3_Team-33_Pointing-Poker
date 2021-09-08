import React from 'react';
import { Avatar } from '@client/components/shared/avatar/avatar';
import { Tooltip } from 'antd';
import {
  StyleCard,
  StyleCardOwner,
  StyleCardText,
  StyleCardTitle,
  StyleCardWrapper,
  StyleStopOutlined,
} from './user-card-styles';

export interface UserCardProps {
  firstName: string;
  lastName: string;
  position: string;
  isOwner: boolean;
  isDelete: boolean;
  avatar: string;
}

const deleteUser = () => {
  console.log('delete user');
  // TODO: add delete user
};

export const UserCard: React.FC<UserCardProps> = (props) => {
  const { firstName, lastName, position, isOwner, isDelete, avatar } = props;
  return (
    <StyleCard>
      <Avatar
        content={{ firstName, lastName }}
        mod={{ size: 83, src: avatar }}
      />
      <StyleCardWrapper>
        {isOwner ? <StyleCardOwner>It&prime;s you</StyleCardOwner> : ''}
        <Tooltip title={`${firstName} ${lastName}`} placement="bottom">
          <StyleCardTitle>
            {firstName}
            {lastName === '' ? '' : ' '}
            {lastName}
          </StyleCardTitle>
        </Tooltip>
        <StyleCardText>{position}</StyleCardText>
      </StyleCardWrapper>
      {isDelete ? <StyleStopOutlined rotate={90} onClick={deleteUser} /> : ''}
    </StyleCard>
  );
};
