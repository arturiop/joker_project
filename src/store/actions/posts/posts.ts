import postApi from '../../../api/postApi';
import errorPopups from '../../../ui/ErrorMessage/in';
import { ActionsTypes, CommonThunkActionType, PostData } from '../../../types/types';

export const actionPosts = {
  setPosts: (data: PostData[]) => ({ type: 'POSTS/SET_POSTS', data } as const),
  setCurrentPage: (page: number) => ({ type: 'POSTS/SET_CURRENT_PAGE', page } as const),
  setTotalItems: (total: number) => ({ type: 'POSTS/SET_TOTAL_ITEMS', total } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: 'POSTS/TOGGLE_IS_FETCHING', isFetching } as const),
};

export const requestPosts = (page: number, userId?: number): ThunkType => async (dispatch) => {
  try {
    dispatch(actionPosts.toggleIsFetching(true));
    const response = await postApi.getPosts(page, userId);

    if (response.code === 200) {
      dispatch(actionPosts.setPosts(response.data));
      dispatch(actionPosts.setTotalItems(response.meta.pagination.total));
    }

    dispatch(actionPosts.setCurrentPage(page));
    dispatch(actionPosts.toggleIsFetching(false));
    errorPopups(response);
  } catch (error) {
    errorPopups(error.message);
    dispatch(actionPosts.toggleIsFetching(false));
  }
};

type ThunkType = CommonThunkActionType<ActionTypePosts>;
export type ActionTypePosts = ActionsTypes<typeof actionPosts>;
