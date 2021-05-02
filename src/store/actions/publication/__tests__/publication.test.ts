import { InitialState, publication } from '../../../reducers/publication';
import { PostData } from '../../../../types/types';
import { actionPublication } from '../publication';

let state: InitialState;

beforeEach(() => {
  state = {
    publication: {} as PostData,
  };
});

const data = {
  id: 1,
  user_id: 1,
  title: 'new posts title',
  body: 'Body test',
  created_at: 'date',
  updated_at: 'update-date',
};

test('set new publication', () => {
  const newState = publication(state, actionPublication.setNewPublication(data));
  expect(newState.publication?.title).toBe('new posts title');
});
