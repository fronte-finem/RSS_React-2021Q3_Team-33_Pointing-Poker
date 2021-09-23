import React, { useState } from 'react';
import { Select } from '@client/components/shared/select/select';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { CardsSetType } from '@client/utils/get-score-sequence';
import { StyleLobbyTitle } from '../lobby-styles';
import { SettingsItem } from './lobby-settings-item';
import { LobbyTimer } from './lobby-timer';
import {
  StyleLobbySettings,
  StyleLobbySettingsScore,
  StyleLobbySettingsWrapper,
} from './lobby-settings-styles';

type CardsSetOption = { value: CardsSetType; label: string };

const cardsSetOption: CardsSetOption[] = [
  { value: CardsSetType.FIBONACCI, label: 'Fibonacci numbers' },
  { value: CardsSetType.POW_2, label: 'Power of two' },
  { value: CardsSetType.CUSTOM, label: 'Custom set' },
];

type SettingsType = {
  title: string;
  component: JSX.Element;
};

export const LobbySettingsSection = observer(() => {
  const { gameState } = useStateService();
  const [isShowGameTimer, setIsShowGameTimer] = useState(false);

  const setDealerGamer = (dealerGamer: boolean) =>
    gameState.setDealerGamer(dealerGamer);

  const setAutoJoin = (autoJoinToGame: boolean) =>
    gameState.setAutoJoinToGame(autoJoinToGame);

  const setAutoOpenCards = (autoOpenCards: boolean) =>
    gameState.setAutoOpenCards(autoOpenCards);

  const setChangeAfterRoundEnd = (changeAfterRoundEnd: boolean) =>
    gameState.setChangeAfterRoundEnd(changeAfterRoundEnd);

  const setTimeoutRound = (timeout: number) => gameState.setTimeout(timeout);

  const toggleTimer = (isShow: boolean) => {
    setIsShowGameTimer(isShow);
    if (!isShow) {
      gameState.setTimeout(undefined);
    }
  };

  const setScoreType = (scoreType: string) => gameState.setScoreType(scoreType);

  const selectCardSet = (cardsSetType: CardsSetType) => {
    gameState.setCardSet(cardsSetType);
  };

  const toggleSettings: Array<SettingsType> = [
    {
      title: 'Scram master as player:',
      component: (
        <Toggle
          checked={gameState.settings.dealerGamer}
          onChange={setDealerGamer}
        />
      ),
    },
    {
      title: 'Auto join to game:',
      component: (
        <Toggle
          checked={gameState.settings.autoJoinToGame}
          onChange={setAutoJoin}
        />
      ),
    },
    {
      title: 'Auto open cards:',
      component: (
        <Toggle
          checked={gameState.settings.autoOpenCards}
          onChange={setAutoOpenCards}
        />
      ),
    },
    {
      title: 'Changing card in round end:',
      component: (
        <Toggle
          checked={gameState.settings.changeAfterRoundEnd}
          onChange={setChangeAfterRoundEnd}
        />
      ),
    },
    {
      title: 'Is timer needed:',
      component: <Toggle onChange={toggleTimer} />,
    },
  ];

  const cardSettings: Array<SettingsType> = [
    {
      title: 'Score type:',
      component: (
        <StyleLobbySettingsScore
          type="text"
          value={gameState.settings.scoreType}
          onChange={(e) => setScoreType(e.target.value)}
        />
      ),
    },
    {
      title: 'A set of cards will be used:',
      component: (
        <Select
          options={cardsSetOption}
          onChange={(value) => selectCardSet(value as CardsSetType)}
        />
      ),
    },
  ];

  return (
    <StyleLobbySettings>
      <StyleLobbyTitle level={2}>Game settings:</StyleLobbyTitle>
      <StyleLobbySettingsWrapper>
        {toggleSettings.map(({ title, component }) => {
          return (
            <SettingsItem key={title} title={title}>
              {component}
            </SettingsItem>
          );
        })}
        {isShowGameTimer ? (
          <SettingsItem title="Round time:">
            <LobbyTimer
              initialTime={gameState.settings.timeout}
              setTimeoutRound={setTimeoutRound}
            />
          </SettingsItem>
        ) : null}
        {cardSettings.map(({ title, component }) => {
          return (
            <SettingsItem key={title} title={title}>
              {component}
            </SettingsItem>
          );
        })}
      </StyleLobbySettingsWrapper>
    </StyleLobbySettings>
  );
});
