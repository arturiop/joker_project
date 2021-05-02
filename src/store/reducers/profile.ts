import { ActionTypeProfile } from '../actions/profile/profile';
import { CommentData, PostData, UserData } from '../../types/types';

const initialState = {
  profile: null as UserData | null,
  userPosts: [] as PostData[],
  userComments: [] as CommentData[],
};

export const profile = (state = initialState, action: ActionTypeProfile):InitialState => {
  switch (action.type) {
    case 'PROFILE/SET_PROFILE': {
      return { ...state, profile: action.profile };
    }
    case 'PROFILE/SET_USERS_POSTS': {
      return { ...state, userPosts: [...state.userPosts, ...action.posts] };
    }
    case 'PROFILE/SET_USERS_COMMENTS': {
      return { ...state, userComments: [...state.userComments, ...action.comments] };
    }
    case 'PROFILE/CLEAR_PROFILE': {
      return {
        ...state, profile: null, userPosts: [], userComments: [],
      };
    }
    default:
      return state;
  }
};

export type InitialState = typeof initialState;
