import React from 'react';
import { PageTimerDemo } from '@client/components/pages/demo/timer';
import { PageGameCardDemo } from '@client/components/pages/demo/game-card';
import { PageAvatarDemo } from '@client/components/pages/demo/avatar';
import { PageIssueDemo } from '@client/components/pages/demo/issue';
import { PageUserCardDemo } from '@client/components/pages/demo/user-card';
import { PageMessageDemo } from '@client/components/pages/demo/chat';
import { MainPage } from '@client/components/pages/main-page/main-page';
import { KickPlayer } from '@client/components/pages/demo/kick-player';
import { KickPlayerVoting } from '@client/components/pages/demo/kick-player-voting';
import { EditIssue } from '@client/components/pages/demo/edit-issue';
import { CreateIssue } from '@client/components/pages/demo/create-issue';
import { PageGameRouterDemo } from '@client/components/pages/demo/game-router';
import { PageComponentsDemo } from '@client/components/pages/demo/components';
import { PageLobbyDemo } from '@client/components/pages/demo/page-lobby';
import { PageGameRouter } from '@client/components/pages/game-router/game-router';
import { DemoGameResultPage } from '../pages/game-result/demo-geme-results';

interface RouteConf {
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
  {
    path: '/demo/lobby',
    name: 'Lobby demo (🚧 mutate game-state 🚧)',
    component: PageLobbyDemo,
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
    name: 'Issue (🚧 mutate game-state 🚧)',
    component: PageIssueDemo,
  },
  {
    path: '/demo/user-card',
    name: 'User-Card (🚧 mutate game-state 🚧)',
    component: PageUserCardDemo,
  },
  {
    path: '/demo/chat',
    name: 'Chat (🚧 mutate game-state 🚧)',
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
  {
    path: '/demo/game-result',
    name: 'Game Result',
    component: DemoGameResultPage,
  },
];
