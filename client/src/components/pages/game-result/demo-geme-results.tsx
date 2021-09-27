import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Alert } from 'antd';
import { useGameService } from '@client/providers/game-service';
import { GameResults, IssuesList, Priority } from '@shared/api-types/issue';
import { Role, UsersList } from '@shared/api-types/user';
import { GameResultsPage } from './game-results-page';

const users: UsersList = [
  {
    id: '123',
    firstName: 'David',
    lastName: 'Blane',
    jobPosition: 'senior tester',
    role: Role.GAMER,
  },
  {
    id: '124',
    firstName: 'Jane-Jane',
    lastName: 'Doe',
    jobPosition: 'middle tester',
    role: Role.GAMER,
  },
  {
    id: '125',
    firstName: 'John',
    lastName: 'Doe',
    jobPosition: 'junior tester',
    role: Role.GAMER,
  },
];

const issues: IssuesList = [
  {
    id: `1`,
    title: `Issue 456`,
    link: `https://jira.my-company.com/issue-456`,
    priority: Priority.LOW,
  },
  {
    id: `2`,
    title: `Issue 789`,
    link: `https://jira.my-company.com/issue-789`,
    priority: Priority.HIGH,
  },
];

const gameResult: GameResults = [
  {
    issueId: '1',
    scores: [
      { userId: '123', score: 5 },
      { userId: '124', score: 'coffee' },
      { userId: '125', score: 42 },
    ],
  },
  {
    issueId: '2',
    scores: [
      { userId: '123', score: 12 },
      { userId: '124', score: 55 },
      { userId: '125', score: 1 },
    ],
  },
];

export const DemoGameResultPage: React.FC = observer(() => {
  const { gameStateActions } = useGameService();

  useEffect(() => {
    gameStateActions.initUser(
      {
        gameId: '11',
        gameTitle: 'Demo Game',
        users,
        issues,
        gameResult,
      },
      users[0].id
    );
  }, []);

  return (
    <Alert.ErrorBoundary>
      <GameResultsPage />
    </Alert.ErrorBoundary>
  );
});
