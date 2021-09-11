import React from 'react';
import { PageExample } from '@client/components/pages/example/example';
import { PageTimerDemo } from '@client/components/pages/demo/timer';
import { PageGameCardDemo } from '@client/components/pages/demo/game-card';
import { PageAvatarDemo } from '@client/components/pages/demo/avatar';
import { PageIssueDemo } from '@client/components/pages/demo/issue';
import { PageUserCardDemo } from '@client/components/pages/demo/user-card';
import { PageMessageDemo } from '@client/components/pages/demo/message';
import { MainPage } from '../pages/main-page/main-page';
import { KickPlayer } from '../pages/demo/kick-player';
import { KickPlayerVoting } from '../pages/demo/kick-player-voting';
import { EditIssue } from '../pages/demo/edit-issue';
import { CreateIssue } from '../pages/demo/create-issue';

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
  {
    path: '/demo/avatar',
    name: 'Avatar Demo',
    component: PageAvatarDemo,
  },
  {
    path: '/demo/issue',
    name: 'Issue Demo',
    component: PageIssueDemo,
  },
  {
    path: '/demo/user-card',
    name: 'User-Card Demo',
    component: PageUserCardDemo,
  },
  {
    path: '/demo/message',
    name: 'Message Demo',
    component: PageMessageDemo,
  },
  {
    path: '/demo/main-page',
    name: 'Main Page',
    component: MainPage,
  },
  {
    path: '/demo/kick-player',
    name: 'Kick Player',
    component: KickPlayer,
  },
  {
    path: '/demo/kick-player-voting',
    name: 'Kick Player Voting',
    component: KickPlayerVoting,
  },
  {
    path: '/demo/edit-issue',
    name: 'Edit Issue',
    component: EditIssue,
  },
  {
    path: '/demo/create-issue',
    name: 'Create Issue',
    component: CreateIssue,
  },
];
