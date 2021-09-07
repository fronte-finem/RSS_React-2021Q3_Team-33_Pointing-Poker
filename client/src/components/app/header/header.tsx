import React from 'react';
import { NavMenu } from '@client/components/app/header/nav-menu';

export const Header: React.FC = ({ children }) => {
  return (
    <header>
      <NavMenu />
      {children}
    </header>
  );
};
