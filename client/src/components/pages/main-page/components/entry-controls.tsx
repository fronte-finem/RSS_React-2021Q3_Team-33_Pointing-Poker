import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Form, message } from 'antd';
import { useGameService } from '@client/providers/game-service';
import { EntryModal } from './entry-modal';
import {
  StyledButton,
  StyledRow,
  StyledControlsWrapper,
  StyledLabel,
  StyledTitle,
  StyledInput,
  Highlight,
  StyledFormItem,
  StyledCustomRow,
} from './entry-controls.styles';

export const EntryControls = observer(() => {
  const { gameState, socketState, gameSocketActions } = useGameService();
  const [createGame, setCreateGame] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showCreateGameModal = () => {
    setCreateGame(true);
    setIsModalVisible(true);
  };

  const showJoinToGameModal = () => {
    setCreateGame(false);
    setIsModalVisible(true);
  };

  const onJoinRequest = async ({ gameId }: { gameId: string }) => {
    if (socketState.isConnected && gameState.id === gameId) {
      showJoinToGameModal();
      return;
    }
    await gameSocketActions.joinGame(gameId);
    if (socketState.isFail) {
      gameSocketActions.disconnect();
      message.error(socketState.failMessage);
      return;
    }
    showJoinToGameModal();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledControlsWrapper>
      <StyledTitle>Start your planning:</StyledTitle>
      <StyledRow>
        <StyledLabel>Create session:</StyledLabel>
        <StyledButton onClick={showCreateGameModal}>
          Start new game
        </StyledButton>
      </StyledRow>

      <Form
        onFinish={onJoinRequest}
        fields={[
          {
            name: 'gameId',
            value: gameState.id,
          },
        ]}>
        <StyledTitle>OR:</StyledTitle>
        <StyledLabel>
          Connect to lobby by <Highlight>ID</Highlight>:
        </StyledLabel>
        <StyledCustomRow>
          <StyledFormItem name="gameId" rules={[{ required: true }]}>
            <StyledInput />
          </StyledFormItem>
          <StyledButton htmlType="submit" loading={socketState.isLoading}>
            Connect
          </StyledButton>
        </StyledCustomRow>
      </Form>

      <EntryModal
        createGame={createGame}
        visible={isModalVisible}
        onCancel={handleCancel}
      />
    </StyledControlsWrapper>
  );
});
