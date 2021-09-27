import { observer } from 'mobx-react-lite';
import { Timer } from '@client/components/shared/timer/timer';
import { Button } from '@client/components/shared/button/button';
import React from 'react';
import { useStateService } from '@client/providers/state-service';
import { IssueCard } from '@client/components/shared/issue/issue-card';
import styled from 'styled-components';

const StyledRound = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

const Center = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ToRight = styled.div`
  margin-left: auto;
`;

export const Round = observer(function Round() {
  const { gameState, modalState } = useStateService();

  return (
    <StyledRound>
      <Center>
        <IssueCard issue={gameState.currentIssue} />
        <Timer time={0} />
      </Center>
      {gameState.settings.timeout ? <Timer time={0} /> : null}
      <ToRight>
        <Button onClick={() => modalState.showIssues()}>Show issues</Button>;
      </ToRight>
    </StyledRound>
  );
});
