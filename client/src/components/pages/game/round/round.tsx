import { observer } from 'mobx-react-lite';
import { Timer } from '@client/components/shared/timer/timer';
import { Button } from '@client/components/shared/button/button';
import React from 'react';

export const Round = observer(function Round() {
  return (
    <div>
      <Timer time={0} />
      <Button>Run Round</Button>
      <Button>Restart Round</Button>
      <Button>Next Issue</Button>
    </div>
  );
});
