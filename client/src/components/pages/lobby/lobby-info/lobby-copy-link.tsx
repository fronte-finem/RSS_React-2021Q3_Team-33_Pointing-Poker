import { Button } from '@client/components/shared/button/button';
import { Input } from '@client/components/shared/input/input';
import React from 'react';
import {
  InfoCopy,
  StyleLobbyCopy,
  StyleLobbyCopyLabel,
  StyleLobbyCopyWrapper,
} from './lobby-info-styles';

interface LobbyLink {
  lobbyLink: string;
}

export const LobbyCopyLink: React.FC<LobbyLink> = (props) => {
  const { lobbyLink } = props;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(lobbyLink);
  };

  return (
    <InfoCopy>
      <StyleLobbyCopy>
        <StyleLobbyCopyLabel>Link to lobby:</StyleLobbyCopyLabel>
        <StyleLobbyCopyWrapper>
          <Input type="text" readOnly value={lobbyLink} />
          <Button type="primary" onClick={copyToClipboard}>
            Copy
          </Button>
        </StyleLobbyCopyWrapper>
      </StyleLobbyCopy>
    </InfoCopy>
  );
};
