import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { StyledDrawer } from '@client/components/shared/drawer/drawer.styles';
import { Info } from './info/info';
import { Round } from './round/round';
import { Issues } from './issues/issues';
import { Statistics } from './statistics/statistics';
import { Users } from './users/users';
import { Cards } from './cards/cards';
import { Center, Footer, Header, Page } from './game.styles';

export const PageGame = observer(function PageGame() {
  const { gameState, modalState } = useStateService();

  const hideStats = () => modalState.resetSelectIssue();

  return (
    <>
      <Page>
        <Header>
          <Info />
        </Header>

        <Center>
          <Issues />
          {gameState.isDealer ? <Round /> : null}
          <Users />
        </Center>

        <Footer>{gameState.isDealer ? null : <Cards />}</Footer>
      </Page>

      <StyledDrawer
        placement="right"
        onClose={hideStats}
        visible={Boolean(modalState.selectIssue)}
        width="max(50%, 400px)">
        <Statistics />
      </StyledDrawer>
    </>
  );
});
