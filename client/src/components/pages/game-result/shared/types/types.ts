import { CardScore } from '@shared/api-types/game-settings';
import { Issue } from '@shared/api-types/issue';

export interface CardResults {
  score: CardScore;
  percent: string;
}
export interface GameResultsRender {
  issue: Issue;
  scores: CardResults[];
}

export interface GameResultXLS {
  issue: string;
  priority: string;
  score: CardScore;
  percent: string;
}
