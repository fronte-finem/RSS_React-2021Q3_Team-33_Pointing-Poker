import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { Input } from '@client/components/shared/input/input';
import { StyledButtonInput } from '@client/components/pages/main-page/components/entry-controls.styles';
import {
  InfoCopy,
  StyleLobbyCopy,
  StyleLobbyCopyLabel,
  StyleLobbyCopyWrapper,
} from './lobby-info-styles';

export const LobbyCopyLink = observer(() => {
  const { gameState } = useStateService();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/join/${gameState.id}`)
      .then(null);
  };

  return (
    <InfoCopy>
      <StyleLobbyCopy>
        <StyleLobbyCopyLabel>Link to lobby:</StyleLobbyCopyLabel>
        <StyleLobbyCopyWrapper>
          <Input type="text" readOnly value={gameState.id} />
          <StyledButtonInput type="primary" onClick={copyToClipboard}>
            Copy
          </StyledButtonInput>
        </StyleLobbyCopyWrapper>
      </StyleLobbyCopy>
    </InfoCopy>
  );
});
