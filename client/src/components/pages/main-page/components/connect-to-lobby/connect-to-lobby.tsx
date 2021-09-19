import { Avatar } from '@client/components/shared/avatar/avatar';
import { InputFile } from '@client/components/shared/input-file/input-file';
import { Input } from '@client/components/shared/input/input';
import { Modal } from '@client/components/shared/modal/modal';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { ModalFuncProps } from 'antd';
import React, { useState } from 'react';
import {
  StyledErrorLabel,
  StyledObserver,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './connect-to-lobby-styleds';

export const ConnectToLobby: React.FC<ModalFuncProps> = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [isObserver, setIsObserver] = useState(false);
  const [avatar, setAvatar] = useState(undefined);
  const [isFirstNameError, setIsFirstNameError] = useState(false);

  const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    if (e.target.value === '') setIsFirstNameError(true);
    else setIsFirstNameError(false);
  };
  const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    console.log(avatar);
  };
  const onChangeJobPosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobPosition(e.target.value);
    console.log(jobPosition);
  };
  const onChangeIsObserver = () => {
    setIsObserver(!isObserver);
  };

  const handlePreview = async (file: any) => {
    setAvatar(file.url);
  };

  return (
    <Modal
      {...props}
      okText="Confirm"
      cancelText="Cancel"
      content={
        <StyledWrapper>
          <StyledTitle> Connect to lobby </StyledTitle>
          <StyledText>Your first name:</StyledText>
          <div style={{ position: 'relative' }}>
            <Input onChange={onChangeFirstName} />
            {isFirstNameError ? (
              <StyledErrorLabel>Enter your name</StyledErrorLabel>
            ) : (
              <></>
            )}
          </div>

          <StyledText>Your last name:</StyledText>
          <Input onChange={onChangeLastName} />
          <StyledText>Your job position:</StyledText>
          <Input onChange={onChangeJobPosition} />
          <StyledText>Image:</StyledText>
          <InputFile onPreview={handlePreview} />
          <Avatar
            content={{ lastName, firstName }}
            mod={{ size: 83, src: avatar }}
          />
          <StyledObserver>
            <StyledText>Connect as Observer </StyledText>
            <Toggle onChange={onChangeIsObserver} />
          </StyledObserver>
        </StyledWrapper>
      }
    />
  );
};
