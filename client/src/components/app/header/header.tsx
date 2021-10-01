import React from 'react';
import { observer } from 'mobx-react-lite';
import { Logo } from '@client/components/app/header/logo';
import { useStateService } from '@client/providers/state-service';
import { ChatToggleButton } from '@client/components/shared/chat/chat-toggle-button';
import { ThemeToggle } from '@client/components/shared/toggle-theme/toggle-theme';
import {
  HeaderLayoutContainer,
  LogoPosition,
  LogoWrapper,
  StyledControlsWrapper,
  StyledHeader,
} from './header.styles';

export const Header = observer(() => {
  const { gameState } = useStateService();

  return (
    <StyledHeader>
      <HeaderLayoutContainer>
        <LogoWrapper>
          <LogoPosition>
            <Logo width={80} height={80} fill="currentColor" />
          </LogoPosition>
        </LogoWrapper>
        <StyledControlsWrapper>
          <ThemeToggle />
          {gameState.isModeEntry ? null : <ChatToggleButton />}
        </StyledControlsWrapper>
      </HeaderLayoutContainer>
    </StyledHeader>
  );
});
