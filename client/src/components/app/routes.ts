import React from 'react';
import { PageExample } from '@client/components/pages/example/example';
import { PageTimerDemo } from '@client/components/pages/demo/timer';
import { PageGameCardDemo } from '@client/components/pages/demo/game-card';

interface RouteConf {
  path: string;
  name: string;
  component?: React.FC<unknown>;
}

export const routes: RouteConf[] = [
  {
    path: '/',
    name: 'Home',
    component: undefined,
  },
  {
    path: '/example',
    name: 'Example',
    component: PageExample,
  },
  {
    path: '/demo/timer',
    name: 'Timer Demo',
    component: PageTimerDemo,
  },
  {
    path: '/demo/game-card',
    name: 'Game-Card Demo',
    component: PageGameCardDemo,
  },
];
