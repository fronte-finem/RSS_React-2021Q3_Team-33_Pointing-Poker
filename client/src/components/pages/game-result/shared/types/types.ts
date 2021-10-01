import { CardScore } from '@shared/api-types/game-card-settings';

export interface GameResultXLS {
  issue: string;
  priority: string;
  score: CardScore;
  percent: string;
}
