import React, { useState } from 'react';
import { Select } from '@client/components/shared/select/select';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { CardsSetDefault, GameSettings } from '@shared/api-types/game-settings';
import { StyleLobbyTitle } from '../lobby-styles';
import { SettingsItem } from './lobby-settings-item';
import { LobbyTimer } from './lobby-timer';
import {
  StyleLobbySettings,
  StyleLobbySettingsScore,
  StyleLobbySettingsWrapper,
} from './lobby-settings-styles';

type CardsSetOption = { value: CardsSetDefault; label: string };

const cardsSetOption: CardsSetOption[] = [
  { value: CardsSetDefault.FIBONACCI, label: 'Fibonacci numbers' },
  { value: CardsSetDefault.POW_2, label: 'Power of two' },
];

type SettingsType = {
  title: string;
  component: JSX.Element;
};

interface SettingsProps {
  state: [GameSettings, React.Dispatch<React.SetStateAction<GameSettings>>];
}

export const LobbySettingsSection: React.FC<SettingsProps> = ({ state }) => {
  const [gameSettings, setGameSettings] = state;
  const [isShowGameTimer, setIsShowGameTimer] = useState(false);

  const setDealerGamer = (dealerGamer: boolean) =>
    setGameSettings((prev) => ({ ...prev, dealerGamer }));

  const setAutoJoin = (autoJoinToGame: boolean) =>
    setGameSettings((prev) => ({ ...prev, autoJoinToGame }));

  const setAutoOpenCards = (autoOpenCards: boolean) =>
    setGameSettings((prev) => ({ ...prev, autoOpenCards }));

  const setChangeAfterRoundEnd = (changeAfterRoundEnd: boolean) =>
    setGameSettings((prev) => ({ ...prev, changeAfterRoundEnd }));

  const setTimeoutRound = (timeout: number) =>
    setGameSettings((prev) => ({ ...prev, timeout }));

  const toggleTimer = (isShow: boolean) => {
    setIsShowGameTimer(isShow);
    if (!isShow) {
      setGameSettings((prev) => ({ ...prev, timeout: undefined }));
    }
  };

  const setScoreType = (scoreType: string) =>
    setGameSettings((prev) => ({ ...prev, scoreType }));

  const selectCardSet = (cardsSet: CardsSetDefault) => {
    setGameSettings((prev) => ({ ...prev, cardsSet }));
  };

  const toggleSettings: Array<SettingsType> = [
    {
      title: 'Scram master as player:',
      component: (
        <Toggle checked={gameSettings.dealerGamer} onChange={setDealerGamer} />
      ),
    },
    {
      title: 'Auto join to game:',
      component: (
        <Toggle checked={gameSettings.autoJoinToGame} onChange={setAutoJoin} />
      ),
    },
    {
      title: 'Auto open cards:',
      component: (
        <Toggle
          checked={gameSettings.autoOpenCards}
          onChange={setAutoOpenCards}
        />
      ),
    },
    {
      title: 'Changing card in round end:',
      component: (
        <Toggle
          checked={gameSettings.changeAfterRoundEnd}
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
          value={gameSettings.scoreType}
          onChange={(e) => setScoreType(e.target.value)}
        />
      ),
    },
    {
      title: 'A set of cards will be used:',
      component: (
        <Select
          options={cardsSetOption}
          onChange={(value) => selectCardSet(value as CardsSetDefault)}
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
              initialTime={gameSettings.timeout}
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
};
