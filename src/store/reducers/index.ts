import { combineReducers } from 'redux';
import { comments } from './comments';
import { publication } from './publication';
import { rating } from './rating';
import { posts } from './posts';
import { users } from './users';
import { error } from './error';
import { auth } from './auth';
import { profile } from './profile';

const rootReducer = combineReducers({
  users,
  posts,
  error,
  rating,
  publication,
  comments,
  auth,
  profile,
});
export default rootReducer;
