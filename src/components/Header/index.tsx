import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PathKeys as CNST } from '../../constants/constants-keys';
import styles from './index.module.css';

const HeaderComponent: FC = memo(() => {
  const location = useLocation();
  let selectedKeyPath = location.pathname;
  if (!selectedKeyPath) {
    selectedKeyPath = CNST.HOME;
  }

  return (
    <Header className={styles.wrap}>
      <Menu className={styles.wrap__menu} defaultSelectedKeys={[selectedKeyPath]} mode="horizontal">
        <Menu.Item key={CNST.HOME}>
          <NavLink to={CNST.HOME}>Home</NavLink>
        </Menu.Item>

        <Menu.Item key={CNST.POSTS}>
          <NavLink to={CNST.POSTS}>Posts</NavLink>
        </Menu.Item>

        <Menu.Item key={CNST.USERS}>
          <NavLink to={CNST.USERS}>Users</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
});

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;
