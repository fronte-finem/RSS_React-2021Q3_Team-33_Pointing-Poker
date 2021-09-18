import React, { useState } from 'react';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { observer } from 'mobx-react-lite';
import { useGameService } from '@client/providers/game-service';
import { GameSettings } from '@shared/api-types/game-settings';
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

interface Props {
  gameSettings: GameSettings;
}

export const LobbyInfoSection: React.FC<Props> = observer(
  ({ gameSettings }) => {
    const { gameState, gameStateActions } = useGameService();

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
            <UserCard user={gameStateActions.getDealer()} />
          </StyleLobbyMaster>
        </InfoMaster>
        {gameState.isDealer ? (
          <LobbyCopyLink
            lobbyLink={`${window.location.origin}/join/12345qwe`}
          />
        ) : null}
        <LobbyInfoControl gameSettings={gameSettings} />
      </>
    );
  }
);
