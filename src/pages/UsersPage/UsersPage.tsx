import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { getIsFetching, getTotalItems } from '../../store/actions/users/users-selector';
import User from '../../components/User';
import PaginationCustom from '../../ui/Pagination';
import styles from './index.module.css';
import { UserData } from '../../types/types';

const UsersPage: FC<PropsType> = memo(({ state, currentPage, onPageChanged }) => {
  const totalItems = useSelector(getTotalItems);
  const isFetching = useSelector(getIsFetching);

  const usersData = state.map((item) => <User item={item} key={item.id} />);

  return (
    <div className={styles.wrap}>
      Users
      {usersData}
      <PaginationCustom
        current={currentPage}
        disabled={isFetching}
        onChange={onPageChanged}
        total={totalItems}
      />
    </div>
  );
});

export default UsersPage;

UsersPage.displayName = 'UsersPage';
type PropsType = {
  state: UserData[],
  currentPage: number,
  onPageChanged: (number: number) => void
};
