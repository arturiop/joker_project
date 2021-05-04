import React, { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsers } from '../store/actions/users/users';
import {
  getCurrentPageUsers, getUsers,
} from '../store/actions/users/users-selector';
import Loading from '../ui/Loading';
import UsersPage from '../pages/UsersPage/UsersPage';
import useRequestData from '../hooks/useRequestData';
import useСorrectionURL from '../hooks/useСorrectionURL';

const UsersPageContainer: FC = memo(() => {
  const users = useSelector(getUsers);
  const currentPage = useSelector(getCurrentPageUsers);

  const dispatch = useDispatch();

  const onPageChanged = (number: number) => {
    dispatch(requestUsers(number));
  };

  useRequestData(requestUsers, currentPage);
  useСorrectionURL('/users', currentPage);

  return (
    <>
      {!users.length ? <Loading />
        : (
          <UsersPage
            state={users}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
          />
        ) }
    </>
  );
});

export default UsersPageContainer;

UsersPageContainer.displayName = 'UsersPageContainer';
