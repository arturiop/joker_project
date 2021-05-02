import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Qs from 'qs';
import { requestUsers } from '../../store/actions/users/users';
import {
  getCurrentPageUsers, getIsFetching, getTotalItems, getUsers,
} from '../../store/actions/users/users-selector';
import User from './User';
import PaginationCustom from '../../ui/Pagination';
import styles from './UsersPage.module.css';
import Loading from '../../ui/Loading';

const UsersPage: FC = memo(() => {
  const users = useSelector(getUsers);
  const currentPage = useSelector(getCurrentPageUsers);
  const totalItems = useSelector(getTotalItems);
  const isFetching = useSelector(getIsFetching);

  const history = useHistory();
  const dispatch = useDispatch();

  const onPageChanged = (number: number) => {
    dispatch(requestUsers(number));
  };

  useEffect(() => {
    const parsed = Qs.parse(history.location.search.substr(1));
    const actualPage = (parsed.page) ? Number(parsed.page) : currentPage;

    dispatch(requestUsers(actualPage));
  }, []);

  useEffect(() => {
    const query: QueryParamsType = {};
    if (currentPage !== 1) query.page = String(currentPage);
    history.push({
      pathname: '/users',
      search: Qs.stringify(query),
    });
  }, [currentPage, history]);

  const usersData = users.map((item) => <User item={item} key={item.id} />);

  if (users.length === 0) {
    return <Loading />;
  }
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

UsersPage.displayName = 'Users';

type QueryParamsType = { page?: string };
