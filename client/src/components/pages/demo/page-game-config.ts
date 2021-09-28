import React from 'react';
import { Role, UsersList } from '@shared/api-types/user';
import {
  GameResults,
  IssuesList,
  Priority,
  RoundResults,
} from '@shared/api-types/issue';
import { ExtraScoreKind } from '@shared/api-types/game-card-settings';
import { getDefaultGameSettings } from '@shared/api-types/game-settings';

export const users: UsersList = [
  {
    id: '1',
    firstName: 'Qwerty',
    lastName: 'Wasd',
    jobPosition: 'uio oiu',
    role: Role.DEALER,
  },
  {
    id: '2',
    firstName: 'David',
    lastName: 'Blane',
    jobPosition: 'senior tester',
    role: Role.GAMER,
  },
  {
    id: '3',
    firstName: 'Jane-Jane',
    lastName: 'Doe',
    jobPosition: 'middle tester',
    role: Role.GAMER,
  },
  {
    id: '4',
    firstName: 'John',
    lastName: 'Doe',
    jobPosition: 'junior tester',
    role: Role.GAMER,
  },
  {
    id: '5',
    firstName: 'Robert',
    lastName: 'Martin',
    jobPosition: 'he he',
    role: Role.SPECTATOR,
  },
  {
    id: '6',
    firstName: 'Some',
    lastName: 'One',
    jobPosition: "you don't know",
    role: Role.GAMER,
  },
  {
    id: '7',
    firstName: 'Who',
    lastName: 'Else',
    jobPosition: 'you know me',
    role: Role.GAMER,
  },
  {
    id: '8',
    firstName: 'Well',
    lastName: 'You-See',
    jobPosition: 'artist',
    role: Role.GAMER,
  },
  {
    id: '9',
    firstName: 'Try',
    lastName: 'Catch',
    jobPosition: 'finally',
    role: Role.GAMER,
  },
  {
    id: '10',
    firstName: 'Goto',
    lastName: 'Break',
    jobPosition: 'continue',
    role: Role.GAMER,
  },
];

export const issues: IssuesList = [
  {
    id: '0',
    title: 'Issue 012456789',
    link: `https://jira.my-company.com/issue-012456789`,
    priority: Priority.LOW,
  },
  {
    id: '1',
    title: 'Issue 1234567890',
    link: `https://jira.my-company.com/issue-1234567890`,
    priority: Priority.LOW,
  },
  {
    id: '2',
    title: 'Issue 2345678901',
    link: `https://jira.my-company.com/issue-234`,
    priority: Priority.HIGH,
  },
  {
    id: '3',
    title: 'Issue 3456789012',
    link: `https://jira.my-company.com/issue-3456789012`,
    priority: Priority.MIDDLE,
  },
  {
    id: '4',
    title: 'Issue 4567890123',
    link: `https://jira.my-company.com/issue-4567890123`,
    priority: Priority.LOW,
  },
  {
    id: '5',
    title: 'Issue 5678901234',
    link: `https://jira.my-company.com/issue-5678901234`,
    priority: Priority.HIGH,
  },
  {
    id: '6',
    title: 'Issue 6789012345',
    link: `https://jira.my-company.com/issue-6789012345`,
    priority: Priority.MIDDLE,
  },
  {
    id: '7',
    title: 'Issue 7890123456',
    link: `https://jira.my-company.com/issue-7890123456`,
    priority: Priority.MIDDLE,
  },
  {
    id: '8',
    title: 'Issue 8901234567',
    link: `https://jira.my-company.com/issue-8901234567`,
    priority: Priority.LOW,
  },
  {
    id: '9',
    title: 'Issue 9012345678',
    link: `https://jira.my-company.com/issue-9012345678`,
    priority: Priority.HIGH,
  },
];

export const gameResult: GameResults = [
  {
    issueId: issues[0].id,
    scores: [
      { userId: users[1].id, score: 5 },
      { userId: users[2].id, score: 42 },
      { userId: users[3].id, score: 42 },
      { userId: users[5].id, score: 5 },
      { userId: users[6].id, score: 13 },
      { userId: users[7].id, score: 8 },
      { userId: users[8].id, score: 0 },
      { userId: users[9].id, score: 5 },
    ],
  },
  {
    issueId: issues[1].id,
    scores: [
      { userId: users[1].id, score: 13 },
      { userId: users[2].id, score: 13 },
      { userId: users[3].id, score: 13 },
      { userId: users[5].id, score: ExtraScoreKind.ONE_HALF },
      { userId: users[6].id, score: 13 },
      { userId: users[7].id, score: 5 },
      { userId: users[8].id, score: 100 },
      { userId: users[9].id, score: 5 },
    ],
  },
  {
    issueId: issues[3].id,
    scores: [
      { userId: users[1].id, score: 1 },
      { userId: users[2].id, score: 4 },
      { userId: users[3].id, score: 8 },
      { userId: users[5].id, score: ExtraScoreKind.COFFEE },
      { userId: users[6].id, score: 1 },
      { userId: users[7].id, score: 8 },
      { userId: users[8].id, score: ExtraScoreKind.COFFEE },
      { userId: users[9].id, score: 5 },
    ],
  },
];

export const roundResults: RoundResults = [
  { userId: users[1].id, score: 8 },
  { userId: users[2].id, score: 42 },
  // { userId: users[3].id, score: undefined },
  { userId: users[5].id, score: 42 },
  { userId: users[6].id, score: 42 },
  { userId: users[7].id, score: ExtraScoreKind.COFFEE },
  { userId: users[8].id, score: 42 },
  { userId: users[9].id, score: 8 },
];

const settings = getDefaultGameSettings();

export const initUserState = {
  gameId: '12345',
  gameTitle: 'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)',
  gameSettings: settings,
  users,
  issues,
  gameResult,
};

export const initGameState = { issues, settings };

export const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
  padding: 20,
};
