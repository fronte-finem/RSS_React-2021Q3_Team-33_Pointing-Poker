import { Avatar } from '@client/components/shared/avatar/avatar';
import { InputFile } from '@client/components/shared/input-file/input-file';
import { Input } from '@client/components/shared/input/input';
import { Modal } from '@client/components/shared/modal/modal';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { ModalFuncProps } from 'antd';
import React from 'react';
import {
  StyledObserver,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './connect-to-lobby-styleds';

export const ConnectToLobby: React.FC<ModalFuncProps> = (props) => {
  return (
    <Modal
      {...props}
      okText="Confirm"
      cancelText="Cancel"
      content={
        <StyledWrapper>
          <StyledTitle> Connect to lobby </StyledTitle>
          <StyledText>Your first name:</StyledText>
          <Input />
          <StyledText>Your last name:</StyledText>
          <Input />
          <StyledText>Your job position:</StyledText>
          <Input />
          <StyledText>Image:</StyledText>
          <InputFile />
          <Avatar
            content={{ lastName: '', firstName: '' }}
            mod={{ size: 83 }}
          />
          <StyledObserver>
            <StyledText>Connect as Observer </StyledText>
            <Toggle />
          </StyledObserver>
        </StyledWrapper>
      }
    />
  );
};
