import { InitialState, posts } from '../../../reducers/posts';
import { actionPosts } from '../posts';

let state: InitialState;

const data = [{
  id: 2,
  user_id: 1,
  title: 'new posts title',
  body: 'Body test',
  created_at: 'date',
  updated_at: 'update-date',
}];

beforeEach(() => {
  state = {
    postsData: [{
      id: 2,
      user_id: 1,
      title: 'new posts title',
      body: 'Body test',
      created_at: 'date',
      updated_at: 'update-date',
    }],
    currentPage: 1,
    totalItems: 1,
    isFetching: true,
  };
});

test('length of postsData should be incremented', () => {
  const newState = posts(state, actionPosts.setPosts(data));

  expect(newState.postsData.length).toBe(1);
});

test('change \'currentPage\' at posts', () => {
  const newState = posts(state, actionPosts.setCurrentPage(5));

  expect(newState.currentPage).toBe(5);
});

test('change \'totalPages\' at posts', () => {
  const newState = posts(state, actionPosts.setTotalItems(5));

  expect(newState.totalItems).toBe(5);
});

test('change \'isFetching\' at posts', () => {
  const newState = posts(state, actionPosts.toggleIsFetching(false));

  expect(newState.isFetching).toBe(false);
});
