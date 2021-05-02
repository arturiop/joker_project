import { actionProfile } from '../profile';
import { InitialState, profile } from '../../../reducers/profile';
import { CommentData, PostData, UserData } from '../../../../types/types';

let state: InitialState;

beforeEach(() => {
  state = {
    profile: {} as UserData,
    userPosts: [] as PostData[],
    userComments: [] as CommentData[],
  };
});

const dataUser: UserData = {
  id: 1,
  name: 'artur',
  email: 'dfsfsdf@gmail.com',
  gender: 'Male',
  status: 'Active',
  created_at: 'date',
  updated_at: 'update-date',
};

const dataPosts = [{
  id: 2,
  user_id: 1,
  title: 'new posts title',
  body: 'Body test',
  created_at: 'date',
  updated_at: 'update-date',
}];

test('set profile', () => {
  const newState = profile(state, actionProfile.setProfile(dataUser));
  expect(newState.profile?.name).toBe('artur');
});

test('set user posts', () => {
  const newState = profile(state, actionProfile.setUserPosts(dataPosts));
  expect(newState.userPosts.length).toBe(1);
});
