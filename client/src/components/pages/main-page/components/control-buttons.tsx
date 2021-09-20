import { Button } from '@client/components/shared/button/button';
import { Input } from '@client/components/shared/input/input';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ConnectToLobby } from './connect-to-lobby/connect-to-lobby';

const StyledTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #66999b;
  margin: 30px 0;
`;
const StyledText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin: 0;
`;

const StyledMainButtons = styled.div`
  width: 516px;
  text-align: center;
  margin-right: auto;
`;

const StyledMainButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainButtons = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <StyledMainButtons>
      <StyledTitle>Start your planning:</StyledTitle>
      <StyledMainButton>
        <StyledText>Create session:</StyledText>
        <Button onClick={showModal} style={{ width: '241px' }}>
          Start new game
        </Button>
      </StyledMainButton>
      <StyledTitle>OR:</StyledTitle>
      <StyledText style={{ textAlign: 'left' }}>
        Connect to lobby by <span style={{ color: '#66999b' }}>URL</span>:
      </StyledText>
      <StyledMainButton>
        <Input style={{ width: '275px' }} />
        <Button onClick={showModal} style={{ width: '241px' }}>
          Connect
        </Button>
      </StyledMainButton>
      <ConnectToLobby visible={isModalVisible} onCancel={handleCancel} />
    </StyledMainButtons>
  );
};
