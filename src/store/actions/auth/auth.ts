import authApi from '../../../api/authApi';
import errorPopups from '../../../ui/ErrorMessage/in';
import {
  ActionsTypes, AuthUser, CommonThunkActionType, UserData,
} from '../../../types/types';

export const actionAuth = {
  setUser: (data: UserData) => ({ type: 'AUTH/SET_USER', data } as const),
  toggleLoggin: (toggle: boolean) => ({ type: 'AUTH/LOGGIN_USER_TOGGLE', toggle } as const),
};

export const authorization = (data: AuthUser): ThunkType => async (dispatch) => {
  try {
    const response = await authApi.authUser(data);
    if (response.code === 201) {
      dispatch(actionAuth.setUser(response.data));
      dispatch(actionAuth.toggleLoggin(true));
    }
    errorPopups(response);
  } catch (error) {
    errorPopups(error.message);
  }
};

type ThunkType = CommonThunkActionType<ActionTypeAuth>;
export type ActionTypeAuth = ActionsTypes<typeof actionAuth>;
