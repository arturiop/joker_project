import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { UserData } from '../../types/types';
import styles from './UsersPage.module.css';

const User: FC<UserType> = memo(({ item }) => (
  <div className={styles.wrap__user}>
    <div>
      <div>{item.name}</div>
      <div>{item.gender}</div>
    </div>
    <NavLink to={`/profile/${item.id}`}>
      <p>go to profile</p>
    </NavLink>
  </div>
));

export default User;

User.displayName = 'User';

type UserType = {
  item: UserData
};
