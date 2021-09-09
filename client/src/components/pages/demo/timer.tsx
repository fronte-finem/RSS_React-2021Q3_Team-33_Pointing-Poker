import React from 'react';
import { Timer } from '@client/components/shared/timer/timer';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';

export const PageTimerDemo: React.FC = () => {
  return (
    <DemoGrid>
      <Timer time={10} />
      <Timer time={60} />
      <Timer time={100} />
      <Timer time={200} />
      <Timer time={300} />
      <Timer time={400} />
      <Timer time={500} />
      <Timer time={600} />
    </DemoGrid>
  );
};
