import { RouteConf } from '@client/components/app/routes';
import { PageTimerDemo } from '@client/components/pages/demo/timer';
import { PageGameCardDemo } from '@client/components/pages/demo/game-card';
import { PageAvatarDemo } from '@client/components/pages/demo/avatar';
import { PageIssueDemo } from '@client/components/pages/demo/issue';
import { PageUserCardDemo } from '@client/components/pages/demo/user-card';
import { PageChatDemo } from '@client/components/pages/demo/modal-chat';
import { ModalKickInitDemo } from '@client/components/pages/demo/modal-kick-init';
import { ModalKickVotingDemo } from '@client/components/pages/demo/modal-kick-voting';
import { ModalIssueEditDemo } from '@client/components/pages/demo/modal-issue-edit';
import { ModalIssueCreateDemo } from '@client/components/pages/demo/modal-issue-create';
import { PageComponentsDemo } from '@client/components/pages/demo/components';
import { PageLobbyDemo } from '@client/components/pages/demo/page-lobby';
import { ModalIssueDeleteDemo } from '@client/components/pages/demo/modal-issue-delete';
import { PageGameDemo } from '@client/components/pages/demo/page-game.';

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
    path: '/game',
    name: 'Game demo (🚧 mutate game-state 🚧)',
    component: PageGameDemo,
  },
  {
    path: '/kick-player',
    name: 'Modal - Kick Player (🚧 mutate game-state 🚧)',
    component: ModalKickInitDemo,
  },
  {
    path: '/kick-player-voting',
    name: 'Modal - Kick Player Voting (🚧 mutate game-state 🚧)',
    component: ModalKickVotingDemo,
  },
  {
    path: '/create-issue',
    name: 'Modal - Create Issue (🚧 mutate game-state 🚧)',
    component: ModalIssueCreateDemo,
  },
  {
    path: '/edit-issue',
    name: 'Modal - Edit Issue (🚧 mutate game-state 🚧)',
    component: ModalIssueEditDemo,
  },
  {
    path: '/delete-issue',
    name: 'Modal - Delete Issue (🚧 mutate game-state 🚧)',
    component: ModalIssueDeleteDemo,
  },
];
