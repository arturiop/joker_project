import { AppState, PostData } from '../../../types/types';

export const getPosts = (state: AppState):PostData[] => state.posts.postsData;
export const getCurrentPage = (state: AppState):number => state.posts.currentPage;
export const getTotalItems = (state: AppState):number => state.posts.totalItems;
export const getIsFetching = (state: AppState):boolean => state.posts.isFetching;
