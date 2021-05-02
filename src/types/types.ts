import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import rootReducer from '../store/reducers';

export type UserData = {
  id: number,
  name: string,
  email: string,
  gender: string,
  status: string,
  created_at: string,
  updated_at: string
};

export type AuthUser = {
  name: string,
  email: string,
  gender: string,
  status: string,
};

export type PostData = {
  id: number,
  user_id: number,
  title: string,
  body: string,
  created_at: string,
  updated_at: string
};

export type GetResponse<D> = {
  code: number,
  meta: Meta,
  data: Array<D>
};

export type Response<D> = {
  code: number,
  meta: Meta,
  data: D
};

export type Meta = {
  pagination: Pagination
};

export type CommentData = {
  id: number,
  post_id: number,
  name: string,
  email: string,
  body: string,
  created_at: string,
  updated_at: string
};

export type Pagination = {
  total: number,
  pages: number,
  page: number,
  limit: number
};

export type SendCommentData = {
  user_id: number,
  name: string,
  email: string,
  body: string
};

export type AppState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionsTypes<T> = T extends { [key: string]: (...args: any[])
=> infer U } ? U : never;

export type CommonThunkActionType<A extends Action, R = Promise<void>>
= ThunkAction<R, AppState, unknown, A>;
