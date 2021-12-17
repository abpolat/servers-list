export type SuccessfulLoginAPIResponse = {
  token: string;
};

export type UnsuccessfulAPIResponse = {
  message: string;
};

export type ServerListItem = {
  name: string;
  distance: number;
};

export type ServersListAPIResponse = ServerListItem[];

export type StoreDataState = {
  loading: boolean;
  serversList: ServersListAPIResponse;
};

export type StoreAuthState = {
  username: string;
  token?: string;
  message?: string;
  userLoading: boolean;
  userLoaded: boolean;
  loginSuccess: boolean;
};

export type StoreErrorState = {
  hasError: boolean;
  errorMessage?: string;
};

export type StoreState = {
  auth: StoreAuthState;
  data: StoreDataState;
  error: StoreErrorState;
};
