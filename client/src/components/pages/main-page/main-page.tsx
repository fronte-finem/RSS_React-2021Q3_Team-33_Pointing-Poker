import React from 'react';
import styled from 'styled-components';
import { MainButtons } from './components/control-buttons';
import { Logo } from './components/logo';

const StyledMainPage = styled.div`
  width: 1000px;
  height: 833px;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 100px 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainPage = () => {
  return (
    <StyledMainPage>
      <Logo />
      <MainButtons />
    </StyledMainPage>
  );
};
