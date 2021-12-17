import { ServersListAPIResponse } from '../../types';

export const LOADING = 'LOADING';
export const setLoading = (loading: boolean) => ({
  type: LOADING as typeof LOADING,
  loading,
});

export const REQUEST_SERVERS_LIST = 'REQUEST_SERVERS_LIST';
export const requestServersList = () => ({
  type: REQUEST_SERVERS_LIST as typeof REQUEST_SERVERS_LIST,
});

export const RECEIVE_SERVERS_LIST = 'RECEIVE_SERVERS_LIST';
export const receiveServersList = (serversList: ServersListAPIResponse) => ({
  type: RECEIVE_SERVERS_LIST as typeof RECEIVE_SERVERS_LIST,
  serversList,
});

export type DataActions =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof receiveServersList>
  | ReturnType<typeof requestServersList>;
