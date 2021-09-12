import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '@client/components/app/header/header';
import { Footer } from '@client/components/app/footer/footer';
import { routes } from '@client/components/app/routes';
import { GameServiceProvider } from '@client/providers/game-service';
import classes from './app.module.css';

export const App: React.FC = () => {
  return (
    <GameServiceProvider>
      <BrowserRouter>
        <div className={classes.app}>
          <Header />
          <main className={classes.main}>
            <Switch>
              {routes.map(({ path, name, component }) => (
                <Route exact key={name} path={path} component={component} />
              ))}
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </GameServiceProvider>
  );
};
