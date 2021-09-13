import React, { useState } from 'react';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { Button } from '@client/components/shared/button/button';
import { StyleLobbyTitle } from '../lobby-styles';
import {
  InfoMaster,
  InfoTitle,
  StyleLobbyControl,
  StyleLobbyInfo,
  StyleLobbyMaster,
  StyleLobbyMasterText,
} from './lobby-info-styles';
import { EditTitleButton } from '../lobby-buttons';
import { LobbyEditTitleModal } from '../lobby-modal';
import { LobbyCopyLink } from './lobby-copy-link';
import { LobbyInfoControl } from './lobby-info-control';

const isMaster = true;

export const LobbyInfoSection: React.FC = () => {
  const [lobbyTitle, setLobbyTitle] = useState(
    'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)'
  );

  const [isEditModal, setIsEditModal] = useState(false);

  const exitLobby = () => {
    // TODO exit lobby for member
    console.log('exit lobby');
  };

  return (
    <>
      <InfoTitle>
        <StyleLobbyInfo span={24}>
          <StyleLobbyTitle
            level={2}
            style={{
              fontSize: '24px',
              lineHeight: '30px',
              fontWeight: 'bold',
            }}>
            {lobbyTitle}
          </StyleLobbyTitle>
          {isMaster ? <EditTitleButton setEditModal={setIsEditModal} /> : ''}
          <LobbyEditTitleModal
            setEditModal={setIsEditModal}
            lobbyTitle={lobbyTitle}
            setLobbyTitle={setLobbyTitle}
            visible={isEditModal}
          />
        </StyleLobbyInfo>
      </InfoTitle>
      <InfoMaster>
        <StyleLobbyMaster>
          <StyleLobbyMasterText>Scram master:</StyleLobbyMasterText>
          <UserCard
            firstName="Rick"
            lastName="Giligan"
            position="lead software engineer"
            isOwner
            avatar=""
            isDelete={false}
          />
        </StyleLobbyMaster>
      </InfoMaster>
      {isMaster ? (
        <LobbyCopyLink lobbyLink="http://ourgame.com/12345qwe" />
      ) : (
        ''
      )}
      {isMaster ? (
        <LobbyInfoControl />
      ) : (
        <StyleLobbyControl>
          <Button type="default" onClick={exitLobby}>
            Exit
          </Button>
        </StyleLobbyControl>
      )}
    </>
  );
};
