import React from 'react';
import {
  Controls,
  Flex,
  Section,
  StyledBtn,
  StyledTitleBtn,
  Title,
} from '@client/components/pages/lobby/lobby-cards/cards-selector.styles';
import { CardScore } from '@shared/api-types/game-card-settings';

export interface ScoreSelect {
  score: CardScore;
  selected: boolean;
}

interface CardsSelectorProps {
  title: string;
  scores: ScoreSelect[];
  onSelectScore: (score: ScoreSelect) => void;
  onSelectAll: () => void;
  onSelectNone: () => void;
  onSelectOnly: () => void;
}

export const CardsSelector = ({
  title,
  scores,
  onSelectScore,
  onSelectAll,
  onSelectNone,
  onSelectOnly,
}: CardsSelectorProps) => {
  return (
    <Section>
      <Title>
        {title}:
        <Controls>
          <StyledTitleBtn type="default" onClick={onSelectAll}>
            All
          </StyledTitleBtn>
          <StyledTitleBtn type="default" onClick={onSelectNone}>
            None
          </StyledTitleBtn>
          <StyledTitleBtn type="default" onClick={onSelectOnly}>
            Only
          </StyledTitleBtn>
        </Controls>
      </Title>
      <Flex>
        {scores.map((score) => (
          <div key={score.score}>
            <StyledBtn
              selected={score.selected}
              onClick={() =>
                onSelectScore({ ...score, selected: !score.selected })
              }>
              {score.score}
            </StyledBtn>
          </div>
        ))}
      </Flex>
    </Section>
  );
};
