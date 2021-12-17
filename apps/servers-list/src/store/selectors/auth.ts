import { StoreState } from '../../types';

export const tokenSelector = (state: StoreState) => state.auth.token;
export const userLoadingSelector = (state: StoreState) =>
  state.auth.userLoading;
export const loginSuccessSelector = (state: StoreState) =>
  state.auth.loginSuccess;
