import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Qs from 'qs';
import { requestUsers } from '../store/actions/users/users';
import {
  getCurrentPageUsers, getUsers,
} from '../store/actions/users/users-selector';
import Loading from '../ui/Loading';
import UsersPage from '../pages/UsersPage/UsersPage';

const UsersPageContainer: FC = memo(() => {
  const users = useSelector(getUsers);
  const currentPage = useSelector(getCurrentPageUsers);

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

  return (
    <>
      {users ? (
        <UsersPage
          state={users}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      )
        : <Loading /> }
    </>
  );
});

export default UsersPageContainer;

UsersPageContainer.displayName = 'UsersPageContainer';

type QueryParamsType = { page?: string };
