import React, { useState } from 'react';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { StyleLobbyTitle } from '../lobby-styles';
import {
  InfoMaster,
  InfoTitle,
  StyleLobbyInfo,
  StyleLobbyMaster,
  StyleLobbyMasterText,
} from './lobby-info-styles';
import { EditTitleButton } from '../lobby-buttons';
import { LobbyEditTitleModal } from '../lobby-modal';
import { LobbyCopyLink } from './lobby-copy-link';
import { LobbyInfoControl } from './lobby-info-control';

export const LobbyInfoSection = observer(() => {
  const { gameState } = useStateService();
  const [isEditModal, setIsEditModal] = useState(false);

  return (
    <>
      <InfoTitle>
        <StyleLobbyInfo span={24}>
          <StyleLobbyTitle level={2}>{gameState.title}</StyleLobbyTitle>
          {gameState.isDealer ? (
            <EditTitleButton setEditModal={setIsEditModal} />
          ) : null}
          <LobbyEditTitleModal
            isVisible={isEditModal}
            setIsVisible={setIsEditModal}
          />
        </StyleLobbyInfo>
      </InfoTitle>
      <InfoMaster>
        <StyleLobbyMaster>
          <StyleLobbyMasterText>Scram master:</StyleLobbyMasterText>
          <UserCard user={gameState.getDealer()} />
        </StyleLobbyMaster>
      </InfoMaster>
      {gameState.isDealer ? (
        <LobbyCopyLink
          lobbyLink={`${window.location.origin}/join/${gameState.id}`}
        />
      ) : null}
      <LobbyInfoControl />
    </>
  );
});
