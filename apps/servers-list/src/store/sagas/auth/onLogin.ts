import { login } from 'apps/servers-list/src/api';
import {
  SuccessfulLoginAPIResponse,
  UnsuccessfulAPIResponse,
} from 'apps/servers-list/src/types';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  LOGIN,
  loginRequest,
  setUserLoading,
  setUserLoaded,
  setLoginSuccess,
  setLoginFail,
  setError,
  setToken,
} from '../../actions';

export function* onLoginWorker({
  username,
  password,
}: ReturnType<typeof loginRequest>) {
  yield put(setUserLoading(true));
  try {
    const res: SuccessfulLoginAPIResponse | UnsuccessfulAPIResponse =
      yield call(login, username, password);

    if ('token' in res) {
      yield put(setLoginSuccess(true));
      yield put(setUserLoaded(true));
      yield put(setError(false));
      yield put(setToken(res.token));
      localStorage.setItem('token', res.token);
    } else {
      yield put(setLoginFail());
      yield put(setError(true, res.message));
    }
  } catch (e: any) {
    yield put(setError(true, e?.message));
  }

  yield put(setUserLoading(false));
}

export function* onLogin() {
  yield takeLatest(LOGIN, onLoginWorker);
}
