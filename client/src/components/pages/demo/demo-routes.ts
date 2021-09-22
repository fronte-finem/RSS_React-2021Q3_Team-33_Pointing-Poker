import { RouteConf } from '@client/components/app/routes';
import { PageTimerDemo } from '@client/components/pages/demo/timer';
import { PageGameCardDemo } from '@client/components/pages/demo/game-card';
import { PageAvatarDemo } from '@client/components/pages/demo/avatar';
import { PageIssueDemo } from '@client/components/pages/demo/issue';
import { PageUserCardDemo } from '@client/components/pages/demo/user-card';
import { PageChatDemo } from '@client/components/pages/demo/chat';
import { KickPlayer } from '@client/components/pages/demo/kick-player';
import { KickPlayerVoting } from '@client/components/pages/demo/kick-player-voting';
import { EditIssue } from '@client/components/pages/demo/edit-issue';
import { CreateIssue } from '@client/components/pages/demo/create-issue';
import { PageComponentsDemo } from '@client/components/pages/demo/components';
import { PageLobbyDemo } from '@client/components/pages/demo/page-lobby';

export const demoRoutes: RouteConf[] = [
  {
    path: '/components',
    name: 'Components',
    component: PageComponentsDemo,
  },
  {
    path: '/timer',
    name: 'Timer',
    component: PageTimerDemo,
  },
  {
    path: '/game-card',
    name: 'Game-Card',
    component: PageGameCardDemo,
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: PageAvatarDemo,
  },
  {
    path: '/issue',
    name: 'Issue (🚧 mutate game-state 🚧)',
    component: PageIssueDemo,
  },
  {
    path: '/user-card',
    name: 'User-Card (🚧 mutate game-state 🚧)',
    component: PageUserCardDemo,
  },
  {
    path: '/chat',
    name: 'Chat (🚧 mutate game-state 🚧)',
    component: PageChatDemo,
  },
  {
    path: '/lobby',
    name: 'Lobby demo (🚧 mutate game-state 🚧)',
    component: PageLobbyDemo,
  },
  {
    path: '/kick-player',
    name: 'Kick Player (🚧 mutate game-state 🚧)',
    component: KickPlayer,
  },
  {
    path: '/kick-player-voting',
    name: 'Kick Player Voting (🚧 mutate game-state 🚧)',
    component: KickPlayerVoting,
  },
  {
    path: '/edit-issue',
    name: 'Edit Issue',
    component: EditIssue,
  },
  {
    path: '/create-issue',
    name: 'Create Issue',
    component: CreateIssue,
  },
];
