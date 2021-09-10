import { Avatar } from '@client/components/shared/avatar/avatar';
import { InputFile } from '@client/components/shared/input-file/input-file';
import { Input } from '@client/components/shared/input/input';
import { Modal } from '@client/components/shared/modal/modal';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { ModalFuncProps } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
`;
const StyledText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;

export const ConnectToLobby: React.FC<ModalFuncProps> = (props) => {
  return (
    <Modal {...props} okText="Confirm" cancelText="Cancel">
      <div
        style={{
          textAlign: 'left',
          paddingBottom: '100px',
          position: 'relative',
        }}>
        <div style={{ display: 'inline-block' }}>
          <StyledTitle> Connect to lobby </StyledTitle>
          <StyledText>Your first name:</StyledText>
          <Input />
          <StyledText>Your last name:</StyledText>
          <Input />
          <StyledText>Your job position:</StyledText>
          <Input />
          <StyledText>Image:</StyledText>
          <InputFile />
          <Avatar content={{ lastName: 'Nick', firstName: 'Niger' }} />
          <div
            style={{
              position: 'absolute',
              top: '0px',
              right: '0px',
              display: 'flex',
            }}>
            <StyledText>Connect as Observer </StyledText>
            <Toggle />
          </div>
        </div>
      </div>
    </Modal>
  );
};
