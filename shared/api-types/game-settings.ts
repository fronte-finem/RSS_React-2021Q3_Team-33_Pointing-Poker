/**
 * Стандартный тип набора карт: числа Фибоначчи, степени двойки
 */
export const enum CardsSetDefault {
  /**
   * числа Фибоначчи
   */
  FIBONACCI = 'fibonacci',
  /**
   * степени двойки
   */
  POW_2 = 'pow 2',
}

/**
 * Значение игровой карты (число или название особенной карты).
 */
export type CardScore = number | string;
/**
 * Массив набора карт собственной последовательности.
 */
export type CardsSetCustom = Array<CardScore>;

/**
 * Тип набора карт: числа Фибоначчи, степени двойки или массив собственной последовательности.
 */
export type CardsSet = CardsSetDefault | CardsSetCustom;

/**
 * Набор настроек игры.
 */
export interface GameSettings {
  /**
   * Будет ли дилер принимать участие в игре.
   */
  dealerGamer: boolean;
  /**
   * Какой набор карточек будет использоваться.
   */
  cardsSet: CardsSet;
  /**
   * Если игра уже началась: впускать автоматически всех новых участников или впускать через механизм admit/reject.
   */
  autoJoinToGame: boolean;
  /**
   * Будут ли карты переворачиваться автоматически, как только все проголосуют.
   */
  autoOpenCards: boolean;
  /**
   * Можно ли менять свой выбор после того, как все карты уже перевернуты.
   */
  changeAfterRoundEnd: boolean;
  /**
   * Конфигурация времени таймера если он ненужен.
   */
  timeout?: number;
}
