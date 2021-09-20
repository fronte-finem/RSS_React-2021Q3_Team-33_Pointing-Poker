import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '@client/components/app/header/header';
import { Footer } from '@client/components/app/footer/footer';
import { routes } from '@client/components/app/routes';
import { Layout } from '@client/components/app/layout/layout';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';
import {
  Content,
  ContentLayoutContainer,
} from '@client/components/app/layout/layout.style';

export const App: React.FC = observer(() => {
  const { gameState } = useGameService();
  return (
    <ThemeProvider theme={gameState.theme}>
      <BrowserRouter>
        <Layout data-testid="app">
          <Header />
          <Content>
            <ContentLayoutContainer>
              <Switch>
                {routes.map(({ path, name, component }) => (
                  <Route exact key={name} path={path} component={component} />
                ))}
              </Switch>
            </ContentLayoutContainer>
          </Content>
          <Footer />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
});
