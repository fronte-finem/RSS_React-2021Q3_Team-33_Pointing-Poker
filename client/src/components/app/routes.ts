import React from 'react';
import { PageExample } from '@client/components/pages/example/example';
import { PageAvatarDemo } from '@client/components/pages/demo/avatar';
import { PageIssueDemo } from '@client/components/pages/demo/issue';
import { PageUserCardDemo } from '@client/components/pages/demo/user-card';
import { PageMessageDemo } from '@client/components/pages/demo/message';

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
];
