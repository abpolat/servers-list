import { LOGIN_URL } from '../config';
import { SuccessfulLoginAPIResponse, UnsuccessfulAPIResponse } from '../types';
import fetchWithTimeout from './fetchWithTimeout';

export async function login(
  username: string,
  password: string
): Promise<SuccessfulLoginAPIResponse | UnsuccessfulAPIResponse> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };

  return fetchWithTimeout(LOGIN_URL, options).then((res) => res.json());
}
