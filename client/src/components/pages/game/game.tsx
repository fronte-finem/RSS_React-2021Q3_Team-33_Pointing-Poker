import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { Info } from './info/info';
import { Round } from './round/round';
import { Issues } from './issues/issues';
import { Users } from './users/users';
import { Cards } from './cards/cards';
import { IssuesDrawer, Page, Wrapper } from './game.styles';

export const PageGame = observer(function PageGame() {
  const { gameState, modalState } = useStateService();

  const isNotGamer = gameState.isDealer && !gameState.settings.dealerGamer;

  return (
    <>
      <Page>
        <Info />

        <Round />

        <Wrapper>
          <Users />

          {isNotGamer ? null : <Cards />}
        </Wrapper>
      </Page>

      <IssuesDrawer
        placement="right"
        onClose={() => modalState.hideIssues()}
        visible={modalState.issuesVisible}
        width="400px">
        <Issues />
      </IssuesDrawer>
    </>
  );
});
