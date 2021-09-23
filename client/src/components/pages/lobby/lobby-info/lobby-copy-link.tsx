import { Button } from '@client/components/shared/button/button';
import { Input } from '@client/components/shared/input/input';
import { useStateService } from '@client/providers/state-service';
import React from 'react';
import {
  InfoCopy,
  StyleLobbyCopy,
  StyleLobbyCopyLabel,
  StyleLobbyCopyWrapper,
} from './lobby-info-styles';

export const LobbyCopyLink: React.FC<{ lobbyLink: string }> = (props) => {
  const { gameState } = useStateService();
  const lobbyId = gameState.id;
  const { lobbyLink } = props;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(lobbyLink).then(null);
  };

  return (
    <InfoCopy>
      <StyleLobbyCopy>
        <StyleLobbyCopyLabel>Link to lobby:</StyleLobbyCopyLabel>
        <StyleLobbyCopyWrapper>
          <Input type="text" readOnly value={lobbyId} />
          <Button type="primary" onClick={copyToClipboard}>
            Copy
          </Button>
        </StyleLobbyCopyWrapper>
      </StyleLobbyCopy>
    </InfoCopy>
  );
};
