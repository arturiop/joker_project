import postApi from '../../../../api/postApi';
import { GetResponse, Meta, PostData } from '../../../../types/types';
import { actionPosts, requestPosts } from '../posts';

jest.mock('../../api/postApi');
const postApiMock = postApi as jest.Mocked<typeof postApi>;

const dispatch = jest.fn();
const getState = jest.fn();

beforeEach(() => {
  dispatch.mockClear();
  getState.mockClear();
  postApiMock.getPosts.mockClear();
});

const result: GetResponse<PostData> = {
  code: 200,
  meta: { pagination: { pages: 32 } } as Meta,
  data: [] as PostData[],
};

const errorResult = {
  message: 'error 404',
};

test('succses response requestPosts', async () => {
  postApiMock.getPosts.mockResolvedValue(result);
  const thunk = requestPosts(1, 1);

  await thunk(dispatch, getState, {});

  expect(dispatch).toBeCalledTimes(5);
  expect(dispatch).toHaveBeenNthCalledWith(1, actionPosts.toggleIsFetching(true));
  expect(dispatch).toHaveBeenNthCalledWith(2, actionPosts.setPosts(result.data));
  expect(dispatch).toHaveBeenNthCalledWith(3,
    actionPosts.setTotalItems(result.meta.pagination.total));
  expect(dispatch).toHaveBeenNthCalledWith(4, actionPosts.setCurrentPage(1));
  expect(dispatch).toHaveBeenNthCalledWith(5, actionPosts.toggleIsFetching(false));
});

test('error response requestPosts', async () => {
  postApiMock.getPosts.mockRejectedValue(errorResult);
  const thunk = requestPosts(1, 1);

  await thunk(dispatch, getState, {});

  expect(dispatch).toBeCalledTimes(3);
  expect(dispatch).toHaveBeenNthCalledWith(1, actionPosts.toggleIsFetching(true));
  expect(dispatch).toHaveBeenNthCalledWith(3, actionPosts.toggleIsFetching(false));
});
