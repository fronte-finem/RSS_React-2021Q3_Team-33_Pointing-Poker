import React from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { AddingGameCard } from '@client/components/shared/game-card/adding-game-card';

export const PageGameCardDemo: React.FC = () => {
  const scores = Array(10)
    .fill(0)
    .map((_, i) => 2 ** i);

  return (
    <DemoGrid>
      {scores.map((score) => (
        <div key={score}>
          <GameCard score={score} scoreType="xyz" />
        </div>
      ))}
      <div>
        <AddingGameCard />
      </div>
    </DemoGrid>
  );
};
