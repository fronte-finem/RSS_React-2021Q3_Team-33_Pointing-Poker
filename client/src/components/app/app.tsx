import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '@client/components/app/header/header';
import { Footer } from '@client/components/app/footer/footer';
import { routes } from '@client/components/app/routes';
import { Layout } from '@client/components/app/layout/layout';
import { useStateService } from '@client/providers/state-service';
import { observer } from 'mobx-react-lite';
import {
  Content,
  ContentLayoutContainer,
} from '@client/components/app/layout/layout.style';
import { DemoPagesRouter } from '@client/components/pages/demo/demo-router';
import { message as antdMessage } from 'antd';
import { Modals } from '@client/components/app/modals/modals';
import { spawnNotification } from '@client/utils/notification/notification';
import userPng from '@client/assets/user.png';

export const App: React.FC = observer(() => {
  const { themeState, modalState, gameState } = useStateService();

  useEffect(() => {
    if (!modalState.systemMessage) return;
    antdMessage.info(modalState.systemMessage).then(null);
    modalState.resetSystemMessage();
  }, [modalState.systemMessage]);

  useEffect(() => {
    if (!modalState.isNotificationAllowed) return;
    if (modalState.chatIsOpen) return;
    if (!modalState.lastChatMessage) return;
    const { userId, message, system } = modalState.lastChatMessage;
    const maybeUser = gameState.getUser(userId);
    if (!maybeUser) return;
    spawnNotification(
      `${maybeUser.firstName} ${maybeUser.lastName || ''}`,
      system ? `🔵 ${message} 🔵` : message,
      maybeUser.avatar || userPng
    );
  }, [modalState.lastChatMessage]);

  return (
    <ThemeProvider theme={themeState.theme}>
      <BrowserRouter>
        <Layout data-testid="app">
          <Header />
          <Content>
            <ContentLayoutContainer>
              <Switch>
                {routes.map(({ path, name, component }) => (
                  <Route exact key={name} path={path} component={component} />
                ))}
                <Route path="/demo">
                  <DemoPagesRouter />
                </Route>
              </Switch>
            </ContentLayoutContainer>
          </Content>
          <Footer />
        </Layout>
        <Modals />
      </BrowserRouter>
    </ThemeProvider>
  );
});
