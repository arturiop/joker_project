import usersApi from '../../../../api/usersApi';
import { actionUsers, requestUsers } from '../users';
import { GetResponse, Meta, UserData } from '../../../../types/types';

jest.mock('../../api/usersApi');
const usersApiMock = usersApi as jest.Mocked<typeof usersApi>;

const dispatch = jest.fn();
const getState = jest.fn();

beforeEach(() => {
  dispatch.mockClear();
  getState.mockClear();
  usersApiMock.getUsers.mockClear();
});

const result: GetResponse<UserData> = {
  code: 200,
  meta: { pagination: { pages: 32 } } as Meta,
  data: [] as UserData[],
};

const errorResult = {
  message: 'error 404',
};

test('succsess response requestUsers', async () => {
  usersApiMock.getUsers.mockResolvedValue(result);
  const thunk = requestUsers(1);

  await thunk(dispatch, getState, {});

  expect(dispatch).toBeCalledTimes(5);
  expect(dispatch).toHaveBeenNthCalledWith(1, actionUsers.toggleIsFetching(true));
  expect(dispatch).toHaveBeenNthCalledWith(2, actionUsers.setUsers(result.data));
  expect(dispatch).toHaveBeenNthCalledWith(3,
    actionUsers.setTotalItems(result.meta.pagination.total));
  expect(dispatch).toHaveBeenNthCalledWith(4, actionUsers.setCurrentPage(1));
  expect(dispatch).toHaveBeenNthCalledWith(5, actionUsers.toggleIsFetching(false));
});

test('error response requestUsers', async () => {
  usersApiMock.getUsers.mockRejectedValue(errorResult);
  const thunk = requestUsers(1);

  await thunk(dispatch, getState, {});

  expect(dispatch).toBeCalledTimes(3);
  expect(dispatch).toHaveBeenNthCalledWith(1, actionUsers.toggleIsFetching(true));
  expect(dispatch).toHaveBeenNthCalledWith(3, actionUsers.toggleIsFetching(false));
});
