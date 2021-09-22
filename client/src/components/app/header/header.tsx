import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavMenu } from '@client/components/app/header/nav-menu';
import { Dropdown } from 'antd';
import { Button } from '@client/components/shared/button/button';
import {
  HeaderLayoutContainer,
  LogoWrapper,
  StyledChatButton,
  StyledChatButtonIcon,
  StyledChatButtonNum,
  StyledControlsWrapper,
  StyledHeader,
} from '@client/components/app/header/header.styles';
import { Logo } from '@client/components/app/header/logo';
import { ColorTheme, GamePage } from '@client/services/game-state';
import { useGameService } from '@client/providers/game-service';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { ChatModal } from '@client/components/app/header/chat-modal';

export const Header = observer(() => {
  const { gameState, gameStateActions } = useGameService();

  const toggleTheme = (checked: boolean) =>
    gameStateActions.toggleTheme(checked ? ColorTheme.DARK : ColorTheme.LIGHT);

  const onShowChat = () => gameStateActions.openChat();
  const onHideChat = () => gameStateActions.closeChat();

  const chatBtn = (
    <StyledChatButton
      type="link"
      icon={<StyledChatButtonIcon />}
      onClick={onShowChat}>
      {gameStateActions.newMessagesCount > 0 ? (
        <StyledChatButtonNum>
          {gameStateActions.newMessagesCount}
        </StyledChatButtonNum>
      ) : null}
    </StyledChatButton>
  );

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
          <Toggle
            unCheckedChildren={ColorTheme.LIGHT}
            checkedChildren={ColorTheme.DARK}
            onChange={toggleTheme}
          />
          {gameState.page !== GamePage.ENTRY ? chatBtn : null}
        </StyledControlsWrapper>
      </HeaderLayoutContainer>
      <ChatModal visible={gameState.chatIsOpen} onCancel={onHideChat} />
    </StyledHeader>
  );
});
