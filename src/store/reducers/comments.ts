import { ActionTypeComments } from '../actions/comments/comments';
import { CommentData } from '../../types/types';

const initialState = {
  comments: [] as CommentData[],
};
export const comments = (state = initialState, action: ActionTypeComments): InitialState => {
  switch (action.type) {
    case 'COMMENTS/SET_COMMENTS': {
      return { ...state, comments: action.data };
    }
    case 'COMMENTS/ADD_COMMENTS': {
      return { ...state, comments: [...state.comments, action.data] };
    }
    case 'COMMENTS/DELETE_COMMENTS': {
      return { ...state, comments: [] };
    }
    default:
      return state;
  }
};
export type InitialState = typeof initialState;
