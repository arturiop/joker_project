import { UserData } from '../../types/types';
import { ActionTypeUsers } from '../actions/users/users';

const initialState = {
  usersData: [] as Array<UserData>,
  currentPage: 1,
  totalItems: 0,
  isFetching: true,
};

export const users = (
  state = initialState,
  action: ActionTypeUsers,
): InitialState => {
  switch (action.type) {
    case 'USERS/SET_USERS': {
      return { ...state, usersData: action.data };
    }
    case 'USERS/SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.number };
    }
    case 'USER/SET_TOTAL_ITEMS': {
      return { ...state, totalItems: action.total };
    }
    case 'USER/TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
};

export type InitialState = typeof initialState;
