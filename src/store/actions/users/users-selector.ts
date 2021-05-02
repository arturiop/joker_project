import { AppState, UserData } from '../../../types/types';

export const getUsers = (state: AppState):UserData[] => state.users.usersData;
export const getCurrentPageUsers = (state: AppState):number => state.users.currentPage;
export const getTotalItems = (state: AppState):number => state.users.totalItems;
export const getIsFetching = (state: AppState):boolean => state.users.isFetching;
