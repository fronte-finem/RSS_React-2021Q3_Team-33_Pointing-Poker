import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { routes } from '@client/components/app/routes';

export const NavMenu: React.FC = () => (
  <Menu mode="horizontal">
    {routes.map(({ path, name }) => (
      <Menu.Item key={name}>
        <NavLink to={path} exact>
          {name}
        </NavLink>
      </Menu.Item>
    ))}
  </Menu>
);
