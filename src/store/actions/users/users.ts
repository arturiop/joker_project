import usersApi from '../../../api/usersApi';
import errorPopups from '../../../ui/ErrorMessage/in';
import { ActionsTypes, CommonThunkActionType, UserData } from '../../../types/types';

export const actionUsers = {
  setUsers: (data: UserData[]) => ({ type: 'USERS/SET_USERS', data } as const),
  setCurrentPage: (number: number) => ({ type: 'USERS/SET_CURRENT_PAGE', number } as const),
  setTotalItems: (total: number) => ({ type: 'USER/SET_TOTAL_ITEMS', total } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: 'USER/TOGGLE_IS_FETCHING', isFetching } as const),
};

export const requestUsers = (page: number): ThunkType => async (dispatch) => {
  try {
    dispatch(actionUsers.toggleIsFetching(true));
    const response = await usersApi.getUsers(page);

    if (response.code === 200) {
      dispatch(actionUsers.setUsers(response.data));
      dispatch(actionUsers.setTotalItems(response.meta.pagination.total));
    }

    dispatch(actionUsers.setCurrentPage(page));
    dispatch(actionUsers.toggleIsFetching(false));
    errorPopups(response);
  } catch (error) {
    errorPopups(error.message);
    dispatch(actionUsers.toggleIsFetching(false));
  }
};

type ThunkType = CommonThunkActionType<ActionTypeUsers>;
export type ActionTypeUsers = ActionsTypes<typeof actionUsers>;
