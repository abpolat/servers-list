import { StoreErrorState } from '../../types';
import { ErrorActions, ERROR } from '../actions';

const initialState: StoreErrorState = {
  hasError: false,
  errorMessage: undefined,
};

export default (state = initialState, action: ErrorActions) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        hasError: action.hasError,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
