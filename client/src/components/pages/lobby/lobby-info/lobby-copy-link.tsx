import { Input } from '@client/components/shared/input/input';
import { useGameService } from '@client/providers/game-service';
import React from 'react';
import { StyledButtonInput } from '../../main-page/components/entry-controls.styles';
import {
  InfoCopy,
  StyleLobbyCopy,
  StyleLobbyCopyLabel,
  StyleLobbyCopyWrapper,
} from './lobby-info-styles';

export const LobbyCopyLink: React.FC<{ lobbyLink: string }> = (props) => {
  const { gameState } = useGameService();
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
          <StyledButtonInput type="primary" onClick={copyToClipboard}>
            Copy
          </StyledButtonInput>
        </StyleLobbyCopyWrapper>
      </StyleLobbyCopy>
    </InfoCopy>
  );
};
