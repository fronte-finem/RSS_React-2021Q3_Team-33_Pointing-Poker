import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { demoRoutes } from '@client/components/pages/demo/demo-routes';

export const NavMenu = () => (
  <Menu theme="dark">
    <Menu.Item key="home">
      <NavLink to="/" exact>
        Home
      </NavLink>
    </Menu.Item>
    {demoRoutes.map(({ path, name }) => (
      <Menu.Item key={name}>
        <NavLink to={`/demo${path}`} exact>
          {name}
        </NavLink>
      </Menu.Item>
    ))}
  </Menu>
);
