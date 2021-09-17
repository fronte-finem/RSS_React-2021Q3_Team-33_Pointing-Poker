import React from 'react';
import { PageTimerDemo } from '@client/components/pages/demo/timer';
import { PageGameCardDemo } from '@client/components/pages/demo/game-card';
import { PageAvatarDemo } from '@client/components/pages/demo/avatar';
import { PageIssueDemo } from '@client/components/pages/demo/issue';
import { PageUserCardDemo } from '@client/components/pages/demo/user-card';
import { PageMessageDemo } from '@client/components/pages/demo/chat';
import { PageGameRouterDemo } from '@client/components/pages/demo/game-router';
import { PageComponentsDemo } from '@client/components/pages/demo/components';

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
    path: '/demo/game-router',
    name: 'Game Router',
    component: PageGameRouterDemo,
  },
  {
    path: '/demo/components',
    name: 'Components',
    component: PageComponentsDemo,
  },
  {
    path: '/demo/timer',
    name: 'Timer',
    component: PageTimerDemo,
  },
  {
    path: '/demo/game-card',
    name: 'Game-Card',
    component: PageGameCardDemo,
  },
  {
    path: '/demo/avatar',
    name: 'Avatar',
    component: PageAvatarDemo,
  },
  {
    path: '/demo/issue',
    name: 'Issue',
    component: PageIssueDemo,
  },
  {
    path: '/demo/user-card',
    name: 'User-Card',
    component: PageUserCardDemo,
  },
  {
    path: '/demo/chat',
    name: 'Chat',
    component: PageMessageDemo,
  },
];
