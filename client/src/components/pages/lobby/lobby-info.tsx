import React, { useState } from 'react';
import { Row } from 'antd';
import { StyleLobbyTitle } from './lobby-styles';
import { StyleLobbyInfo } from './lobby-info-styles';
import { EditTitleButton } from './lobby-buttons';
import { LobbyEditTitleModal } from './lobby-modal';

const isMaster = true;

export const LobbyInfoSection: React.FC = () => {
  const [lobbyTitle, setLobbyTitle] = useState(
    'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)'
  );

  const [isEditModal, setIsEditModal] = useState(false);

  return (
    <Row>
      <StyleLobbyInfo span={24}>
        <StyleLobbyTitle
          level={2}
          style={{ fontSize: '24px', lineHeight: '30px' }}>
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
    </Row>
  );
};
