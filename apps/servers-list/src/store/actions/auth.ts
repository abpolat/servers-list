export const USER_LOADED = 'USER_LOADED';
export const setUserLoaded = (userLoaded: boolean) => ({
  type: USER_LOADED as typeof USER_LOADED,
  userLoaded,
});

export const USER_LOADING = 'USER_LOADING';
export const setUserLoading = (userLoading: boolean) => ({
  type: USER_LOADING as typeof USER_LOADING,
  userLoading,
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const setLoginSuccess = (loginSuccess: boolean) => ({
  type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
  loginSuccess,
});

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const setLoginFail = () => ({
  type: LOGIN_FAIL as typeof LOGIN_FAIL,
});

export const LOGOUT = 'LOGOUT';
export const logoutRequest = () => ({
  type: LOGOUT as typeof LOGOUT,
});

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const setLogoutSuccess = () => ({
  type: LOGOUT_SUCCESS as typeof LOGOUT_SUCCESS,
});

export const LOGIN = 'LOGIN';
export const loginRequest = (username: string, password: string) => ({
  type: LOGIN as typeof LOGIN,
  username,
  password,
});

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = (token: string) => ({
  type: SET_TOKEN as typeof SET_TOKEN,
  token,
});

export const RECOVER_TOKEN = 'RECOVER_TOKEN';
export const recoverToken = () => ({
  type: RECOVER_TOKEN as typeof RECOVER_TOKEN,
});

export type AuthActions =
  | ReturnType<typeof setUserLoaded>
  | ReturnType<typeof setUserLoading>
  | ReturnType<typeof setLoginSuccess>
  | ReturnType<typeof setLoginFail>
  | ReturnType<typeof logoutRequest>
  | ReturnType<typeof setLogoutSuccess>
  | ReturnType<typeof setToken>
  | ReturnType<typeof recoverToken>
  | ReturnType<typeof loginRequest>;
