import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavMenu } from '@client/components/app/header/nav-menu';
import { Dropdown } from 'antd';
import { Button } from '@client/components/shared/button/button';
import {
  HeaderLayoutContainer,
  LogoWrapper,
  StyledControlsWrapper,
  StyledHeader,
} from '@client/components/app/header/header.styles';
import { Logo } from '@client/components/app/header/logo';
import { GamePage } from '@client/services/game-state';
import { useGameService } from '@client/providers/game-service';
import { ChatToggleButton } from '@client/components/shared/chat/chat-toggle-button';
import { ThemeToggle } from '@client/components/shared/toggle-theme/toggle-theme';

export const Header = observer(() => {
  const { gameState } = useGameService();

  return (
    <StyledHeader>
      <HeaderLayoutContainer>
        <LogoWrapper>
          <Logo width={80} height={80} fill="currentColor" />
        </LogoWrapper>
        <StyledControlsWrapper>
          <Dropdown
            overlay={<NavMenu />}
            placement="bottomCenter"
            trigger={['click']}>
            <Button>Demo pages</Button>
          </Dropdown>
          <ThemeToggle />
          {gameState.page !== GamePage.ENTRY ? <ChatToggleButton /> : null}
        </StyledControlsWrapper>
      </HeaderLayoutContainer>
    </StyledHeader>
  );
});
