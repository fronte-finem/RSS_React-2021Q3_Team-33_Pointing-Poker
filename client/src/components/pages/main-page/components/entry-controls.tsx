import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Form } from 'antd';
import { useStateService } from '@client/providers/state-service';
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
  StyledButtonInput,
} from './entry-controls.styles';

export const EntryControls = observer(() => {
  const { gameState, socketState } = useStateService();
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
    await socketState.joinGame(gameId);
    if (socketState.isFail) {
      socketState.disconnect();
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
          <StyledFormItem
            name="gameId"
            rules={[{ required: true, whitespace: true }]}
            messageVariables={{ name: 'Game id' }}>
            <StyledInput />
          </StyledFormItem>
          <StyledButtonInput htmlType="submit" loading={socketState.isLoading}>
            Connect
          </StyledButtonInput>
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
