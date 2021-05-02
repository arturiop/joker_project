import { ActionsTypes, CommonThunkActionType } from '../../types/types';

const initialState = {
  message: '',
};

export const error = (state = initialState, action: ActionType): InitialState => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export const actionError = {
  setError: (message: string) => ({ type: 'SET_ERROR', message } as const),
};
export const setErrorMessage = (message: string): ThunkType => async (dispatch) => {
  dispatch(actionError.setError(message));
};

type InitialState = typeof initialState;
type ThunkType = CommonThunkActionType<ActionType>;
type ActionType = ActionsTypes<typeof actionError>;
