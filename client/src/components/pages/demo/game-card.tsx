import React from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import { GameCard } from '@client/components/shared/game-card/game-card';
import { AddingGameCard } from '@client/components/shared/game-card/adding-game-card';
import { getPow2Sequence } from '@shared/utils/array';

export const PageGameCardDemo: React.FC = () => {
  return (
    <DemoGrid>
      {getPow2Sequence(10).map((score) => (
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
