import {
  AppState, CommentData, PostData, UserData,
} from '../../../types/types';

export const getProfile = (state: AppState): UserData | null => state.profile.profile;
export const getUserPosts = (state: AppState): PostData[] => state.profile.userPosts;
export const getUserComments = (state: AppState): CommentData[] => state.profile.userComments;
