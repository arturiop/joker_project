import { ActionTypePublication } from '../actions/publication/publication';
import { PostData } from '../../types/types';

const initialState = {
  publication: null as PostData | null,
};

export const publication = (state = initialState, action: ActionTypePublication):InitialState => {
  switch (action.type) {
    case 'PUBLICATION/SET_PUBLICATION': {
      return { ...state, publication: action.publication };
    }
    case 'PUBLICATION/DELETE_PUBLICATION': {
      return { ...state, publication: null };
    }
    default:
      return state;
  }
};

export type InitialState = typeof initialState;
