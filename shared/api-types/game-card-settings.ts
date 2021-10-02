import {
  getFibonacciSequence,
  getPow2Sequence,
  getSequenceOfTens,
} from '@shared/utils/array';

export enum ScoreType {
  STORY_POINT = 'story point',
}

export const FIB_SCORES: number[] = getFibonacciSequence(12).slice(2);
export const POW2_SCORES: number[] = getPow2Sequence(10);
export const TENS_SCORES: number[] = getSequenceOfTens(11).slice(1);

export const PRESET_CLASSIC: number[] = [1, 2, 3, 5, 8, 13, 20, 40, 100];

export enum ExtraScoreKind {
  COFFEE = '☕',
  INFINITY = '∞',
  QUESTION = '?',
  ZERO = '0',
  ONE_HALF = '½',
}

export const EXTRA_SCORES: ExtraScoreKind[] = Object.values(ExtraScoreKind);

export const PRESET_CLASSIC_EXTRAS: ExtraScoreKind[] = [
  ExtraScoreKind.COFFEE,
  ExtraScoreKind.ZERO,
  ExtraScoreKind.ONE_HALF,
];

export type NoneScore = '' | undefined | null;

export type CardScore = number | ExtraScoreKind | NoneScore;

export const isNoneScore = (score: CardScore): boolean =>
  score === '' || score === undefined || score === null;

export const isRealScore = (score: CardScore): boolean => !isNoneScore(score);
