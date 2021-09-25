import { Issue } from '@shared/api-types/issue';
import {
  ExtraScoreKind,
  PRESET_CLASSIC,
  PRESET_CLASSIC_EXTRAS,
  ScoreType,
} from '@shared/api-types/game-card-settings';

/**
 * Набор настроек игры:
 * ---------------------------
 * - **dealerGamer**         - Будет ли дилер принимать участие в игре.
 * - **autoJoinToGame**      - Если игра уже началась: впускать автоматически всех новых участников или впускать через механизм admit/reject.
 * - **autoOpenCards**       - Будут ли карты переворачиваться автоматически, как только все проголосуют.
 * - **changeAfterRoundEnd** - Можно ли менять свой выбор после того, как все карты уже перевернуты.
 * - **timeout**             - Конфигурация времени таймера если он ненужен.
 * - **cardsSet**            - Набор значений карт для игры.
 * - **cardsSetExtras**      - Набор значений особых карт для игры.
 * - **scoreType**           - Название единиц измерения для значений карт
 */
export interface GameSettings {
  dealerGamer: boolean;
  autoJoinToGame: boolean;
  autoOpenCards: boolean;
  changeAfterRoundEnd: boolean;
  timeout?: number;
  cardsDeck: number[];
  cardsDeckExtras: ExtraScoreKind[];
  cardsScoreType?: string;
}

export const getDefaultGameSettings = (): GameSettings => ({
  dealerGamer: false,
  autoJoinToGame: true,
  autoOpenCards: true,
  changeAfterRoundEnd: false,
  timeout: undefined,
  cardsDeck: [...PRESET_CLASSIC],
  cardsDeckExtras: [...PRESET_CLASSIC_EXTRAS],
  cardsScoreType: ScoreType.STORY_POINT,
});

export interface GameStartPayload {
  settings: GameSettings;
  issues: Issue[];
}
