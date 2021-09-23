import React from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import { IssueButton } from '@client/components/shared/issue/issue-button';
import { Issue, Priority } from '@shared/api-types/issue';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { getDefaultGameSettings } from '@shared/api-types/game-settings';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { Button } from '@client/components/shared/button/button';
import { getRandomItem } from '@shared/utils/array';

const getIssue = (id: number): Issue => ({
  id: `${id}`,
  title: `Issue ${id}`,
  link: `https://jira.my-company.com/issue-${id}`,
  priority: getRandomItem(Object.values(Priority)),
});

const issues: Issue[] = Array(9)
  .fill(0)
  .map(() => getIssue(Math.trunc(1000 * Math.random())));

const settings = getDefaultGameSettings();
const init = {
  gameId: '123',
  gameTitle: 'Game',
  gameSettings: settings,
  users: [],
};

export const PageIssueDemo: React.FC = observer(() => {
  const { gameState } = useStateService();

  let i = 0;

  const selectNext = () => {
    gameState.startRound(issues[i].id);
    i = i >= issues.length - 1 ? 0 : i + 1;
  };

  const toggleGameState = (checked: boolean) => {
    if (checked) gameState.startGame(settings);
    else gameState.endGame([]);
  };

  const toggleDealer = (checked: boolean) => {
    if (checked) gameState.initDealer(init, '42');
    else gameState.initUser(init, '123');
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
        <Toggle
          unCheckedChildren="lobby"
          checkedChildren="game"
          onChange={toggleGameState}
          checked={gameState.gameRun}
        />
        <Button onClick={selectNext} disabled={!gameState.gameRun}>
          Select next issue
        </Button>
      </div>
      <DemoGrid>
        {issues.map((issue) => (
          <div key={issue.id}>
            <IssueCard issue={issue} />
          </div>
        ))}
        {gameState.isDealer ? <IssueButton /> : null}
      </DemoGrid>
    </div>
  );
});
