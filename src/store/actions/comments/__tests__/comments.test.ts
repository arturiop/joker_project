import { comments, InitialState } from '../../../reducers/comments';
import { actionComments } from '../comments';

let state: InitialState;

const data = {
  id: 2,
  post_id: 1,
  name: 'new posts title',
  email: 'sladfds@gmail.com',
  body: 'Body test',
  created_at: 'date',
  updated_at: 'update-date',
};

beforeEach(() => {
  state = {
    comments: [{
      id: 23,
      post_id: 1,
      name: 'new posts title',
      email: 'sladfds@gmail.com',
      body: 'Body test',
      created_at: 'date',
      updated_at: 'update-date',
    },
    {
      id: 2,
      post_id: 1,
      name: 'new posts title',
      email: 'sladfds@gmail.com',
      body: 'Body test',
      created_at: 'date',
      updated_at: 'update-date',
    }],
  };
});

test('add new comment', () => {
  const newState = comments(state, actionComments.addComments(data));

  expect(newState.comments.length).toBe(3);
});

test('delete all comments in state', () => {
  const newState = comments(state, actionComments.deleteComments());

  expect(newState.comments.length).toBe(0);
});
