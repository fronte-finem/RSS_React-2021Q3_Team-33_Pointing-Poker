import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Alert } from 'antd';
import { useStateService } from '@client/providers/state-service';
import { PageGame } from '@client/components/pages/game/game';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { initGameState, initUserState, wrapperStyle } from './page-game-config';

export const PageGameDemo = observer(function PageGameDemo() {
  const { gameState } = useStateService();

  const toggleDealer = (checked: boolean) => {
    if (checked) gameState.initDealer(initUserState, initUserState.users[0].id);
    else gameState.initUser(initUserState, initUserState.users[3].id);
    gameState.startGame(initGameState);
    gameState.initResults(initUserState.gameResult);
  };

  const toggleRound = (checked: boolean) => {
    if (checked) {
      gameState.startRound(initGameState.issues[5].id);
      gameState.progressRound(initUserState.users[1].id);
      gameState.progressRound(initUserState.users[5].id);
      gameState.progressRound(initUserState.users[8].id);
      gameState.progressRound(initUserState.users[9].id);
    } else {
      gameState.endRound({ issueId: initGameState.issues[5].id, scores: [] });
    }
  };

  useEffect(() => {
    toggleDealer(true);
  }, []);

  return (
    <div>
      <div style={wrapperStyle}>
        <Toggle
          unCheckedChildren="user"
          checkedChildren="dealer"
          onChange={toggleDealer}
          checked={gameState.isDealer}
        />
        <Toggle
          unCheckedChildren="stop"
          checkedChildren="start"
          onChange={toggleRound}
          checked={gameState.roundRun}
        />
      </div>
      <div>
        <Alert.ErrorBoundary>
          <PageGame />
        </Alert.ErrorBoundary>
      </div>
    </div>
  );
});
