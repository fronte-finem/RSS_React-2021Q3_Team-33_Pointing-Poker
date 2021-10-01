import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { UserCard } from '@client/components/shared/user-card/user-card';
import { Button } from '@client/components/shared/button/button';
import React from 'react';
import { StyledTitle, StyledSubtitle } from '@client/components/styles/text';
import {
  MainWrapper,
  ControlWrapper,
  DealerWrapper,
  TitleWrapper,
} from './info.styles';

export const Info = observer(function Info() {
  const { gameState, socketState } = useStateService();

  const stopGame = () => socketState.endGame();

  const exitLobby = () => socketState.disconnect();

  return (
    <div>
      <TitleWrapper>
        <StyledTitle level={2}>{gameState.title}</StyledTitle>
      </TitleWrapper>

      <MainWrapper>
        <DealerWrapper>
          <StyledSubtitle>Scram master:</StyledSubtitle>
          <UserCard user={gameState.getDealer()} />
        </DealerWrapper>

        <ControlWrapper>
          <Button
            type="default"
            loading={socketState.isLoading}
            onClick={gameState.isDealer ? stopGame : exitLobby}>
            {gameState.isDealer ? 'Stop Game' : 'Exit'}
          </Button>
        </ControlWrapper>
      </MainWrapper>
    </div>
  );
});
