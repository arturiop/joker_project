import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC, memo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styles from './index.module.css';

const HeaderComponent: FC = memo(() => {
  const history = useHistory();
  let selectedKeyPath = history.location.pathname.substr(1);

  if (!selectedKeyPath) {
    selectedKeyPath = 'home';
  }

  return (
    <Header className={styles.wrap}>
      <Menu className={styles.wrap__menu} defaultSelectedKeys={[selectedKeyPath]} mode="horizontal">
        <Menu.Item key="home">
          <NavLink to="/home">Home</NavLink>
        </Menu.Item>

        <Menu.Item key="posts">
          <NavLink to="/posts">Posts</NavLink>
        </Menu.Item>

        <Menu.Item key="users">
          <NavLink to="/users">Users</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
});

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;
