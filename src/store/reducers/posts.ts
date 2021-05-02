import { ActionTypePosts } from '../actions/posts/posts';
import { PostData } from '../../types/types';

const initialState = {
  postsData: [] as Array<PostData>,
  currentPage: 1,
  totalItems: 0,
  isFetching: true,
};

export const posts = (
  state = initialState,
  action: ActionTypePosts,
): InitialState => {
  switch (action.type) {
    case 'POSTS/SET_POSTS': {
      return { ...state, postsData: action.data };
    }
    case 'POSTS/SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.page };
    }
    case 'POSTS/SET_TOTAL_ITEMS': {
      return { ...state, totalItems: action.total };
    }
    case 'POSTS/TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
};

export type InitialState = typeof initialState;
