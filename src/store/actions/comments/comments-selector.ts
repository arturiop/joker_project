import { AppState, CommentData } from '../../../types/types';

// eslint-disable-next-line import/prefer-default-export
export const getCommentsForPost = (state: AppState): CommentData[] => state.comments.comments;
