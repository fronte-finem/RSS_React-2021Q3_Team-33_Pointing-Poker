import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

export const NavMenu: React.FC = () => (
  <Menu>
    <Menu.Item>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to="/example" exact>
        Example
      </NavLink>
    </Menu.Item>
  </Menu>
);
