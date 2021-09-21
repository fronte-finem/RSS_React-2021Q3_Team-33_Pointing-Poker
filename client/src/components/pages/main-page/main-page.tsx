import React from 'react';
import { StyledMainPage } from '@client/components/pages/main-page/main-page.styles';
import { EntryControls } from './components/entry-controls';
import { Logo } from './components/logo';

export const MainPage = () => {
  return (
    <StyledMainPage>
      <Logo />
      <EntryControls />
    </StyledMainPage>
  );
};
