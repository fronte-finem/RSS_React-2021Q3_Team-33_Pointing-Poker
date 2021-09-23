import { CardScore, ExtraScoreKind } from '@shared/api-types/game-settings';
import { getFibonacciSequence, getPow2Sequence } from '@shared/utils/array';

export const enum CardsSetType {
  FIBONACCI = 'fibonacci',
  POW_2 = 'pow 2',
  CUSTOM = 'custom',
}

export const getScoreSequence = (
  cardsSetType: CardsSetType,
  customCardsSet?: CardScore[],
  size = 10
): CardScore[] => {
  const extraScores = Object.values(ExtraScoreKind);

  switch (cardsSetType) {
    case CardsSetType.FIBONACCI:
      return [...extraScores, ...getFibonacciSequence(size + 2).slice(2)];
    case CardsSetType.POW_2:
      return [...extraScores, ...getPow2Sequence(size)];
    case CardsSetType.CUSTOM:
      return customCardsSet || [];
    default:
      return [];
  }
};
