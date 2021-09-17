import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout as AntdLayout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '@client/components/app/header/header';
import { Footer } from '@client/components/app/footer/footer';
import { routes } from '@client/components/app/routes';
import { Layout } from '@client/components/app/layout/layout';
import { useGameService } from '@client/providers/game-service';
import { observer } from 'mobx-react-lite';

export const App: React.FC = observer(() => {
  const { gameState } = useGameService();
  return (
    <ThemeProvider theme={gameState.theme}>
      <BrowserRouter>
        <Layout data-testid="app">
          <Header />
          <AntdLayout.Content>
            <Switch>
              {routes.map(({ path, name, component }) => (
                <Route exact key={name} path={path} component={component} />
              ))}
            </Switch>
          </AntdLayout.Content>
          <Footer />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
});
