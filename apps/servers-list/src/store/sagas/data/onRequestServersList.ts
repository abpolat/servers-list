import { getServersList } from 'apps/servers-list/src/api';
import {
  ServersListAPIResponse,
  UnsuccessfulAPIResponse,
} from 'apps/servers-list/src/types';
import { put, takeLatest, select, call } from 'redux-saga/effects';
import {
  REQUEST_SERVERS_LIST,
  receiveServersList,
  setLoading,
  setError,
  logoutRequest,
} from '../../actions';
import { tokenSelector } from '../../selectors';

export function* onRequestServersListWorker() {
  const token: ReturnType<typeof tokenSelector> = yield select(tokenSelector);
  yield put(setLoading(true));
  if (token) {
    try {
      const serversList: ServersListAPIResponse | UnsuccessfulAPIResponse =
        yield call(getServersList, token);
      if ('message' in serversList) {
        console.log({ serversList });
        throw new Error('Something went wrong, please try again');
      }

      yield put(receiveServersList(serversList));
    } catch (e: any) {
      if (e?.status === 401) {
        yield put(logoutRequest());
        return;
      }

      yield put(setError(true, e.message));
    }
  } else {
    yield put(setError(true, 'Missing or wrong token'));
  }
  yield put(setLoading(false));
}

export function* onRequestServersList() {
  yield takeLatest(REQUEST_SERVERS_LIST, onRequestServersListWorker);
}
