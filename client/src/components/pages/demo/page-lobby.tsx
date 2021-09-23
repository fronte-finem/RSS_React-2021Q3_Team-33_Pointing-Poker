import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { Role, User } from '@shared/api-types/user';
import { getDefaultGameSettings } from '@shared/api-types/game-settings';
import { PageLobby } from '@client/components/pages/lobby/lobby';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { Issue, Priority } from '@shared/api-types/issue';
import { getRandomItem } from '@shared/utils/array';

const getIssue = (id: number): Issue => ({
  id: `${id}`,
  title: `Issue ${id}`,
  link: `https://jira.42-company.com/issue-${id}`,
  priority: getRandomItem(Object.values(Priority)),
});

const issues: Issue[] = Array(9)
  .fill(0)
  .map(() => getIssue(Math.trunc(1000 * Math.random())));

const settings = getDefaultGameSettings();

const users: Array<User> = [
  {
    firstName: 'David',
    lastName: 'Blane',
    jobPosition: 'senior software engineer',
    avatar: '',
    id: '1',
    role: Role.GAMER,
  },
  {
    firstName: 'Dayana',
    lastName: 'Ross',
    jobPosition: 'junior software engineer',
    avatar: '',
    id: '2',
    role: Role.GAMER,
  },
  {
    firstName: 'Daniel',
    lastName: 'Horn',
    jobPosition: '',
    avatar: '',
    id: '3',
    role: Role.GAMER,
  },
  {
    firstName: 'Mark',
    lastName: 'Single',
    jobPosition: 'senior software engineer',
    avatar: '',
    id: '4',
    role: Role.DEALER,
  },
  {
    firstName: 'Jane',
    lastName: 'Ring',
    jobPosition: 'software engineer',
    avatar: '',
    id: '5',
    role: Role.GAMER,
  },
  {
    firstName: 'Larry',
    lastName: 'King',
    jobPosition: 'junior software engineer',
    avatar: '',
    id: '6',
    role: Role.GAMER,
  },
  {
    firstName: 'Fill',
    lastName: '',
    jobPosition: 'QA engineer',
    avatar: '',
    id: '7',
    role: Role.GAMER,
  },
];

const init = {
  gameId: '12345',
  gameTitle: 'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)',
  gameSettings: settings,
  users,
  issues,
};

export const PageLobbyDemo: React.FC = observer(() => {
  const { gameState } = useStateService();

  useEffect(() => {
    gameState.initDealer(init, '4');
    gameState.setIssues(issues);
  }, []);

  const toggleDealer = (checked: boolean) => {
    if (checked) gameState.initDealer(init, '4');
    else gameState.initUser(init, '2');
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          padding: 20,
        }}>
        <Toggle
          unCheckedChildren="user"
          checkedChildren="dealer"
          onChange={toggleDealer}
          checked={gameState.isDealer}
        />
      </div>
      <div>
        <PageLobby />
      </div>
    </div>
  );
});
