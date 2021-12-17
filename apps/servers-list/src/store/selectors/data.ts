import { StoreState } from '../../types';

export const serversListSelector = (state: StoreState) =>
  state.data.serversList;

export const dataLoadingSelector = (state: StoreState) => state.data.loading;
