import { SERVERS_LIST_URL } from '../config';
import { ServersListAPIResponse, UnsuccessfulAPIResponse } from '../types';
import fetchWithTimeout from './fetchWithTimeout';

export async function getServersList(
  token: string
): Promise<ServersListAPIResponse | UnsuccessfulAPIResponse> {
  const options = {
    method: 'GET',
    mode: 'cors' as RequestMode,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetchWithTimeout(SERVERS_LIST_URL, options).then((res) => {
    if (res.status !== 200) {
      throw res;
    }
    return res.json();
  });
}
