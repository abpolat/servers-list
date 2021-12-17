import { put, select, takeLatest } from 'redux-saga/effects';
import {
  RECOVER_TOKEN,
  recoverToken,
  setToken,
  setLoginSuccess,
} from '../../actions';
import { tokenSelector } from '../../selectors';

export function* onRecoverTokenWorker() {
  const token: ReturnType<typeof tokenSelector> = yield select(tokenSelector);
  if (token) {
    return;
  }

  const localStorageToken = localStorage.getItem('token');

  if (localStorageToken) {
    yield put(setToken(localStorageToken));
    yield put(setLoginSuccess(true));
  }
}

export function* onRecoverToken() {
  yield takeLatest(RECOVER_TOKEN, onRecoverTokenWorker);
}
