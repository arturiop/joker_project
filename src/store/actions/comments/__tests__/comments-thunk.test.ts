import commentsApi from '../../../../api/commentsApi';
import { CommentData, GetResponse, Meta } from '../../../../types/types';
import { requestComments } from '../comments';

jest.mock('../../api/commentsApi');
const commentsApiMock = commentsApi as jest.Mocked<typeof commentsApi>;

const dispatch = jest.fn();
const getState = jest.fn();

beforeEach(() => {
  dispatch.mockClear();
  getState.mockClear();
  commentsApiMock.getComments.mockClear();
});

const result: GetResponse<CommentData> = {
  code: 200,
  meta: { pagination: { pages: 32 } } as Meta,
  data: [] as CommentData[],
};

const errorResult = {
  message: 'error 404',
};

test('succses response requestComments', async () => {
  commentsApiMock.getComments.mockResolvedValue(result);
  const thunk = requestComments(1);

  await thunk(dispatch, getState, {});

  expect(dispatch).toBeCalledTimes(1);
});

test('error response requestPosts', async () => {
  commentsApiMock.getComments.mockRejectedValue(errorResult);
  const thunk = requestComments(1);

  await thunk(dispatch, getState, {});

  expect(dispatch).toBeCalledTimes(1);
});
