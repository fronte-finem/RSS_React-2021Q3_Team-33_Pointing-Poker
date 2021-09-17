import { Select } from '@client/components/shared/select/select';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { CardsSetDefault } from '@shared/api-types/game-settings';
import React, { useState } from 'react';
import { StyleLobbyTitle } from '../lobby-styles';
import {
  StyleLobbySettings,
  StyleLobbySettingsDesc,
  StyleLobbySettingsItem,
  StyleLobbySettingsScore,
  StyleLobbySettingsWrapper,
} from './lobby-settings-styles';
import { LobbyTimer } from './lobby-timer';

type SettingsType = {
  title: string;
  component: JSX.Element;
};

type SettingsCardsType = {
  value: string;
  label: string;
};

export const LobbySettingsSection: React.FC = () => {
  const [dealerGame, setDealerGame] = useState(false);
  const [autoJoinToGame, setAutoJoinToGame] = useState(false);
  const [autoOpenCards, setAutoOpenCards] = useState(false);
  const [changeAfterRoundEnd, setChangeAfterRoundEnd] = useState(false);
  const [isShowGameTimer, setIsShowGameTimer] = useState(false);
  const [timeoutRound, setTimeoutRound] = useState(0);
  const [scoreType, setScoreType] = useState('');
  console.log(
    dealerGame,
    autoJoinToGame,
    autoOpenCards,
    changeAfterRoundEnd,
    isShowGameTimer,
    timeoutRound
  );

  const cards: Array<SettingsCardsType> = [
    {
      label: 'Fibonacci numbers',
      value: CardsSetDefault.FIBONACCI,
    },
    {
      label: 'Power of two',
      value: CardsSetDefault.POW_2,
    },
  ];

  const settings: Array<SettingsType> = [
    {
      title: 'Scram master as player:',
      component: <Toggle onChange={(value) => setDealerGame(value)} />,
    },
    {
      title: 'Auto join to game:',
      component: <Toggle onChange={(value) => setAutoJoinToGame(value)} />,
    },
    {
      title: 'Auto open cards:',
      component: <Toggle onChange={(value) => setAutoOpenCards(value)} />,
    },
    {
      title: 'Changing card in round end:',
      component: <Toggle onChange={(value) => setChangeAfterRoundEnd(value)} />,
    },
    {
      title: 'Is timer needed:',
      component: <Toggle onChange={(value) => setIsShowGameTimer(value)} />,
    },
    {
      title: 'Round time:',
      component: <LobbyTimer setTimeoutRound={setTimeoutRound} />,
    },
    {
      title: 'Score type:',
      component: (
        <StyleLobbySettingsScore
          type="text"
          value={scoreType}
          onChange={(e) => setScoreType(e.target.value)}
        />
      ),
    },
    {
      title: 'A set of cards will be used:',
      component: <Select options={cards} />,
    },
  ];

  return (
    <StyleLobbySettings>
      <StyleLobbyTitle
        level={2}
        style={{
          fontSize: '24px',
          lineHeight: '30px',
          fontWeight: 'bold',
        }}>
        Game settings:
      </StyleLobbyTitle>
      <StyleLobbySettingsWrapper>
        {settings.map((setting, index) => {
          return (
            <StyleLobbySettingsItem key={index.toString()}>
              <StyleLobbySettingsDesc>{setting.title}</StyleLobbySettingsDesc>
              {setting.component}
            </StyleLobbySettingsItem>
          );
        })}
      </StyleLobbySettingsWrapper>
    </StyleLobbySettings>
  );
};
