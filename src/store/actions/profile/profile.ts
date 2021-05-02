import commentsApi from '../../../api/commentsApi';
import postApi from '../../../api/postApi';
import profileApi from '../../../api/profileApi';
import errorPopups from '../../../ui/ErrorMessage/in';
import {
  ActionsTypes, CommentData, CommonThunkActionType, PostData, UserData,
} from '../../../types/types';

export const actionProfile = {
  setProfile: (profile: UserData) => ({ type: 'PROFILE/SET_PROFILE', profile } as const),
  setUserComments: (comments: CommentData[]) => ({ type: 'PROFILE/SET_USERS_COMMENTS', comments } as const),
  setUserPosts: (posts: PostData[]) => ({ type: 'PROFILE/SET_USERS_POSTS', posts } as const),
  clearProfile: () => ({ type: 'PROFILE/CLEAR_PROFILE' } as const),
};

export const setProfile = (userId: number): ThunkType => async (dispatch) => {
  try {
    const response = await profileApi.getProfile(userId);

    if (response.code === 200) {
      dispatch(actionProfile.setProfile(response.data));
    }
  } catch (error) {
    errorPopups(error.message);
  }
};

export const requestUserPosts = (page:number, userId: number): ThunkType => async (dispatch) => {
  try {
    const response = await postApi.getPosts(page, userId);

    if (response.code === 200) {
      dispatch(actionProfile.setUserPosts(response.data));
    }
  } catch (error) {
    errorPopups(error.message);
  }
};

export const requestUserComments = (email: string): ThunkType => async (dispatch) => {
  try {
    const response = await commentsApi.getCommentsForUser(email);

    if (response.code === 200) {
      dispatch(actionProfile.setUserComments(response.data));
    }
    errorPopups(response);
  } catch (error) {
    errorPopups(error.message);
  }
};

type ThunkType = CommonThunkActionType<ActionTypeProfile>;
export type ActionTypeProfile = ActionsTypes<typeof actionProfile>;
