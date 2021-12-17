import { StoreErrorState } from '../../types';

export const ERROR = 'ERROR';
export const setError = (hasError: boolean, errorMessage?: string) => ({
  type: ERROR as typeof ERROR,
  hasError,
  errorMessage,
});

export type ErrorActions = ReturnType<typeof setError>;
