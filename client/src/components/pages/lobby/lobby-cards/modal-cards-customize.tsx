import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Modal } from '@client/components/shared/modal/modal';
import { useStateService } from '@client/providers/state-service';
import { Button } from '@client/components/shared/button/button';
import { toggleItem } from '@shared/utils/array';
import {
  CardScore,
  EXTRA_SCORES,
  FIB_SCORES,
  POW2_SCORES,
  PRESET_CLASSIC,
  PRESET_CLASSIC_EXTRAS,
  TENS_SCORES,
} from '@shared/api-types/game-card-settings';
import { CardsSelector, ScoreSelect } from './cards-selector';
import { Wrapper } from './modal-cards-customize.styles';

const markSelected = (
  scores: CardScore[],
  selectedScores: CardScore[]
): ScoreSelect[] => {
  return scores.map((score) => ({
    score,
    selected: selectedScores.some((s) => s === score),
  }));
};

export const ModalCardsCustomize = observer(() => {
  const { modalState, gameState } = useStateService();
  const [selectedExtraScores, setSelectedExtraScores] = useState(
    gameState.settings.cardsDeckExtras
  );
  const [selectedScores, setSelectedScores] = useState(
    gameState.settings.cardsDeck
  );

  useEffect(() => {
    setSelectedExtraScores(gameState.settings.cardsDeckExtras);
    setSelectedScores(gameState.settings.cardsDeck);
  }, [modalState.customizeCards]);

  const onSelectScore = ({ score }: ScoreSelect) => {
    setSelectedScores(toggleItem(score as number));
  };

  const onSelectExtraScore = ({ score }: ScoreSelect) => {
    setSelectedExtraScores((prevArray) => {
      const nextArray = prevArray.filter((elem) => elem !== score);
      if (nextArray.length !== prevArray.length) {
        return nextArray;
      }
      return EXTRA_SCORES.filter(
        (elem) => elem === score || prevArray.includes(elem)
      );
    });
  };

  const onlyExtraScore = () => {
    setSelectedExtraScores(EXTRA_SCORES);
    setSelectedScores([]);
  };

  const includeScores = (scores: number[]) => () => {
    setSelectedScores((prevArray) => {
      return [...new Set([...prevArray, ...scores])];
    });
  };

  const excludeScores = (scores: number[]) => () => {
    setSelectedScores((prevArray) => {
      return prevArray.filter((elem) => !scores.includes(elem));
    });
  };

  const onCancel = () => modalState.closeCardsCustomize();

  const onOk = () => {
    gameState.setCardsDeck([...selectedScores.sort((a, b) => a - b)]);
    gameState.setCardsDeckExtras([...selectedExtraScores]);
    onCancel();
  };

  const onReset = () => {
    setSelectedExtraScores(PRESET_CLASSIC_EXTRAS);
    setSelectedScores(PRESET_CLASSIC);
  };

  const footer = [
    <Button onClick={onOk} key="ok-modal-btn">
      Apply
    </Button>,
    <Button
      onClick={onReset}
      style={{ marginRight: 'auto' }}
      key="reset-modal-btn">
      Reset
    </Button>,
    <Button type="default" onClick={onCancel} key="cancel-modal-btn">
      Cancel
    </Button>,
  ];

  return (
    <Modal
      visible={modalState.customizeCards}
      title="Customize cards deck"
      footer={footer}>
      <Wrapper>
        <CardsSelector
          title="Extra cards"
          scores={markSelected(EXTRA_SCORES, selectedExtraScores)}
          onSelectScore={onSelectExtraScore}
          onSelectAll={() => setSelectedExtraScores(EXTRA_SCORES)}
          onSelectNone={() => setSelectedExtraScores([])}
          onSelectOnly={onlyExtraScore}
        />
        <CardsSelector
          title="Fibonacci sequence"
          scores={markSelected(FIB_SCORES, selectedScores)}
          onSelectScore={onSelectScore}
          onSelectAll={includeScores(FIB_SCORES)}
          onSelectNone={excludeScores(FIB_SCORES)}
          onSelectOnly={() => setSelectedScores(FIB_SCORES)}
        />
        <CardsSelector
          title="Power of two"
          scores={markSelected(POW2_SCORES, selectedScores)}
          onSelectScore={onSelectScore}
          onSelectAll={includeScores(POW2_SCORES)}
          onSelectNone={excludeScores(POW2_SCORES)}
          onSelectOnly={() => setSelectedScores(POW2_SCORES)}
        />
        <CardsSelector
          title="Sequence of tens"
          scores={markSelected(TENS_SCORES, selectedScores)}
          onSelectScore={onSelectScore}
          onSelectAll={includeScores(TENS_SCORES)}
          onSelectNone={excludeScores(TENS_SCORES)}
          onSelectOnly={() => setSelectedScores(TENS_SCORES)}
        />
      </Wrapper>
    </Modal>
  );
});
