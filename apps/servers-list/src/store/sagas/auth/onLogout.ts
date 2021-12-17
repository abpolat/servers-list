import { put, takeLatest } from 'redux-saga/effects';
import { LOGOUT, setLogoutSuccess } from '../../actions';

export function* onLogoutWorker() {
  localStorage.removeItem('token');
  yield put(setLogoutSuccess());
}

export function* onLogout() {
  yield takeLatest(LOGOUT, onLogoutWorker);
}
