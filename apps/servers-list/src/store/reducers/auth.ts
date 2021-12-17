import { StoreAuthState } from '../../types';
import {
  AuthActions,
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_TOKEN,
  USER_LOADED,
  USER_LOADING,
} from '../actions';

const initialState: StoreAuthState = {
  username: '',
  userLoaded: false,
  userLoading: false,
  loginSuccess: false,
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        userLoaded: action.userLoaded,
      };
    case USER_LOADING:
      return {
        ...state,
        userLoading: action.userLoading,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: action.loginSuccess,
      };
    case LOGIN:
      return {
        ...state,
        username: action.username,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
