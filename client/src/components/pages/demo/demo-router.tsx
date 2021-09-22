import { Route, Switch } from 'react-router-dom';
import { demoRoutes } from '@client/components/pages/demo/demo-routes';
import React from 'react';

export const DemoPagesRouter = () => {
  return (
    <Switch>
      {demoRoutes.map((route) => (
        <Route
          exact
          key={route.name}
          path={`/demo${route.path}`}
          component={route.component}
        />
      ))}
    </Switch>
  );
};
