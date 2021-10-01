import React, { useState } from 'react';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { StyledTitle, StyledSubtitle } from '@client/components/styles/text';
import {
  InfoMaster,
  InfoTitle,
  StyleLobbyInfo,
  StyleLobbyMaster,
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
          <StyledTitle level={2}>{gameState.title}</StyledTitle>
          {gameState.isDealer ? (
            <EditTitleButton setEditModal={setIsEditModal} />
          ) : null}
        </StyleLobbyInfo>
      </InfoTitle>

      <InfoMaster>
        <StyleLobbyMaster>
          <StyledSubtitle>Scram master:</StyledSubtitle>
          <UserCard user={gameState.getDealer()} />
        </StyleLobbyMaster>
      </InfoMaster>

      {gameState.isDealer ? <LobbyCopyLink lobbyLink={gameState.id} /> : null}

      <LobbyInfoControl />

      <LobbyEditTitleModal
        isVisible={isEditModal}
        setIsVisible={setIsEditModal}
      />
    </>
  );
});
