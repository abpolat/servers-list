import { StoreDataState } from '../../types';
import { LOADING, RECEIVE_SERVERS_LIST } from '../actions';
import { DataActions } from '../actions/data';

const initialState: StoreDataState = {
  serversList: [],
  loading: false,
};

export default (state = initialState, action: DataActions): StoreDataState => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case RECEIVE_SERVERS_LIST:
      return {
        ...state,
        serversList: action.serversList,
      };
    default:
      return state;
  }
};
