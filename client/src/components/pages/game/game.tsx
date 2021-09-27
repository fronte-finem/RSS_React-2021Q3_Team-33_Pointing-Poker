import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStateService } from '@client/providers/state-service';
import { StyledDrawer } from '@client/components/shared/drawer/drawer.styles';
import styled from 'styled-components';
import { Info } from './info/info';
import { Round } from './round/round';
import { Issues } from './issues/issues';
import { Users } from './users/users';
import { Cards } from './cards/cards';
import { Footer, Header, Page } from './game.styles';

const IssuesDrawer = styled(StyledDrawer)`
  & .ant-drawer-body {
    padding: 0;
  }
`;

export const PageGame = observer(function PageGame() {
  const { gameState, modalState } = useStateService();

  return (
    <>
      <Page>
        <Header>
          <Info />
        </Header>

        <Round />

        <Users />

        <Footer>{gameState.isDealer ? null : <Cards />}</Footer>
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
