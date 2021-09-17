import React, { useState } from 'react';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { Button } from '@client/components/shared/button/button';
import { useGameService } from '@client/providers/game-service';
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

export const LobbyInfoSection: React.FC = () => {
  const { gameState } = useGameService();
  const thisUser = gameState.users.find(
    (user) => user.id === gameState.selfUserId
  );
  const isDealer = thisUser?.role === 'dealer';
  const lobbyTitle = gameState.title;

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
          {isDealer ? <EditTitleButton setEditModal={setIsEditModal} /> : ''}
          <LobbyEditTitleModal
            setEditModal={setIsEditModal}
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
      {isDealer ? <LobbyCopyLink /> : ''}
      {isDealer ? (
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
