import { ActionTypeAuth } from '../actions/auth/auth';
import { UserData } from '../../types/types';

const initialState = {
  user: {} as UserData,
  loggin: false,
};
export const auth = (state = initialState, action: ActionTypeAuth): InitialState => {
  switch (action.type) {
    case 'AUTH/SET_USER':
      return {
        ...state,
        user: action.data,
      };
    case 'AUTH/LOGGIN_USER_TOGGLE':
      return {
        ...state, loggin: action.toggle,
      };
    default:
      return state;
  }
};
export type InitialState = typeof initialState;
