import React from 'react';
import { PageGameRouter } from '@client/components/pages/game-router/game-router';

export interface RouteConf {
  path: string;
  name: string;
  component?: React.FC<unknown>;
}

export const routes: RouteConf[] = [
  {
    path: '/',
    name: 'Home',
    component: PageGameRouter,
  },
  {
    path: '/join/:id',
    name: 'Home with id',
    component: PageGameRouter,
  },
];
