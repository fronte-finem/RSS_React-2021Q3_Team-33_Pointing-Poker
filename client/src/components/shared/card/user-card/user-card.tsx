import React from 'react';
import { Card as AntCard, CardProps as AntCardProps } from 'antd';
import styled from 'styled-components';
import { StopOutlined } from '@ant-design/icons';
import { Avatar } from '../../avatar/avatar';

interface UserCardContent {
  firstName: string;
  lastName: string;
  position: string;
  isOwner: boolean;
  isDelete: boolean;
}

interface UserCardProps {
  content: UserCardContent;
  mod?: AntCardProps;
}

const StyleCard = styled(AntCard)`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;

  .ant-card-body {
    padding: 18px 22px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const StyleCardWrapper = styled.div`
  position: relative;
  margin-left: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyleCardOwner = styled.p`
  position: absolute;
  top: -10px;
  left: 5px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000;
`;

const StyleCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
`;

const StyleCardText = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
`;

const StyleStopOutlined = styled(StopOutlined)`
  font-size: 47px;
  margin-left: auto;
  margin-right: 3px;
  cursor: pointer;
`;

const deleteUser = () => {
  console.log('delete user');
  // TODO: add delete user
};

export const UserCard: React.FC<UserCardProps> = ({ content, mod }) => {
  const { firstName, lastName, position, isOwner, isDelete } = content;
  const card = (
    <StyleCard {...mod}>
      <Avatar content={{ firstName, lastName }} mod={{ size: 83 }} />
      <StyleCardWrapper>
        {isOwner ? <StyleCardOwner>It&prime;s you</StyleCardOwner> : ''}
        <StyleCardTitle>
          {firstName}
          {lastName === '' ? '' : ' '}
          {lastName}
        </StyleCardTitle>
        <StyleCardText>{position}</StyleCardText>
      </StyleCardWrapper>
      {isDelete ? <StyleStopOutlined rotate={90} onClick={deleteUser} /> : ''}
    </StyleCard>
  );
  return card;
};
