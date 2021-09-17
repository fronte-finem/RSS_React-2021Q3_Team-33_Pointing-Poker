import { Button } from '@client/components/shared/button/button';
import React from 'react';
import { InfoControl } from './lobby-info-styles';

export const LobbyInfoControl: React.FC = () => {
  const startGame = () => {
    // TODO start game
    console.log('start game');
  };

  const cancelGame = () => {
    // TODO cancel game
    console.log('cancel game');
  };

  return (
    <InfoControl>
      <Button type="primary" onClick={startGame}>
        Start game
      </Button>
      <Button type="default" onClick={cancelGame}>
        Cancel game
      </Button>
    </InfoControl>
  );
};
