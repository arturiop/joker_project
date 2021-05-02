import { ActionTypeRating } from '../actions/rating/rating';

const initialState = {
  rating: 99,
  allowToVote: true,
};

export const rating = (
  state = initialState, action: ActionTypeRating,
): InitialState => {
  switch (action.type) {
    case 'RATING/RAISING_RATING': {
      return { ...state, rating: state.rating + action.value, allowToVote: false };
    }

    default:
      return state;
  }
};

export type InitialState = typeof initialState;
