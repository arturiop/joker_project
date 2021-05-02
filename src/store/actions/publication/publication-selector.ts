import { AppState, PostData } from '../../../types/types';

// eslint-disable-next-line import/prefer-default-export
export const getPublication = (state: AppState):PostData | null => state.publication.publication;
