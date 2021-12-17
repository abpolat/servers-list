import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import {
  onLogin,
  onLogout,
  onRecoverToken,
  onRequestServersList,
} from './sagas';

const sagas = [onLogin, onLogout, onRecoverToken, onRequestServersList];

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run the saga
sagas.map((saga) => sagaMiddleware.run(saga));

export { store, sagaMiddleware };
