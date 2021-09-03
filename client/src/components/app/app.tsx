import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '@client/components/app/header/header';
import { Footer } from '@client/components/app/footer/footer';
import { PageExample } from '@client/components/pages/example/example';
import classes from './app.module.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <main className={classes.main}>
          <Switch>
            <Route path="/example" exact component={PageExample} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
