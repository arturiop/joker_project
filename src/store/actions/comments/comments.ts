/* eslint-disable @typescript-eslint/ban-ts-comment */
import commentsApi from '../../../api/commentsApi';
import errorPopups from '../../../ui/ErrorMessage/in';
import {
  ActionsTypes, CommentData, CommonThunkActionType, SendCommentData,
} from '../../../types/types';

export const actionComments = {
  setComments: (data: CommentData[]) => ({ type: 'COMMENTS/SET_COMMENTS', data } as const),
  addComments: (data: CommentData) => ({ type: 'COMMENTS/ADD_COMMENTS', data } as const),
  deleteComments: () => ({ type: 'COMMENTS/DELETE_COMMENTS' } as const),
};

export const requestComments = (postId: number): ThunkType => async (dispatch) => {
  try {
    const response = await commentsApi.getComments(postId);

    if (response.code === 200) {
      dispatch(actionComments.setComments(response.data));
    }
    errorPopups(response);
  } catch (error) {
    errorPopups(error.message);
  }
};

export const sendComment = (postId: number,
  data: SendCommentData): ThunkType => async (dispatch) => {
  try {
    const response = await commentsApi.sendComment(postId, data);
    if (response.code === 201) {
      dispatch(actionComments.addComments(response.data));
    }
    errorPopups(response);
  } catch (error) {
    errorPopups(error);
  }
};

type ThunkType = CommonThunkActionType<ActionTypeComments>;
export type ActionTypeComments = ActionsTypes<typeof actionComments>;
