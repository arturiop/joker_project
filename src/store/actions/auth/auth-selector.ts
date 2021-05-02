import { AppState, UserData } from '../../../types/types';

// eslint-disable-next-line import/prefer-default-export
export const getUserAuth = (state: AppState): UserData => state.auth.user;
