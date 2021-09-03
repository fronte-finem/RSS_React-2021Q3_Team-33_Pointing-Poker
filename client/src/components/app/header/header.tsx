import React from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { NavMenu } from '@client/components/app/header/nav-menu';

export const Header: React.FC = ({ children }) => {
  return (
    <header>
      <Dropdown overlay={<NavMenu />}>
        <button type="button">
          Pages <DownOutlined />
        </button>
      </Dropdown>
      {children}
    </header>
  );
};
