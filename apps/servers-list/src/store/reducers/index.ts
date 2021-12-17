import { combineReducers } from 'redux';
import auth from './auth';
import data from './data';
import error from './error';

const rootReducer = combineReducers({
  auth,
  data,
  error,
});

export default rootReducer;
