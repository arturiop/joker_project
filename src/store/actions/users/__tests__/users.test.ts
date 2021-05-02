import { InitialState, users } from '../../../reducers/users';
import { actionUsers } from '../users';

let state: InitialState;

const data = [{
  id: 1,
  name: 'Artur',
  email: 'arturio@gmail.com',
  gender: 'Male',
  status: 'some kind of status',
  created_at: 'date',
  updated_at: 'update-date',
}];

beforeEach(() => {
  state = {
    usersData: [],
    currentPage: 1,
    totalItems: 1,
    isFetching: true,
  };
});

test('length of usersData should be incremented', () => {
  const newState = users(state, actionUsers.setUsers(data));

  expect(newState.usersData.length).toBe(1);
});

test('change \'currentPage\' at users', () => {
  const newState = users(state, actionUsers.setCurrentPage(5));

  expect(newState.currentPage).toBe(5);
});

test('change \'totalItems\' at users', () => {
  const newState = users(state, actionUsers.setTotalItems(5));

  expect(newState.totalItems).toBe(5);
});
