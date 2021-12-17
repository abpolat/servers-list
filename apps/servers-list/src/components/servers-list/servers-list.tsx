import e2e from 'libs/e2e';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest, requestServersList } from '../../store/actions';
import {
  dataLoadingSelector,
  errorSelector,
  serversListSelector,
} from '../../store/selectors';
import { ServersListAPIResponse, ServerListItem } from '../../types';
import { AppTitle } from '../app-title';
import { Loading } from '../loading';
import styles from './server-list.module.scss';

type Fields = keyof ServerListItem;

export const ServersList = () => {
  const dispatch = useDispatch();
  const serverListData = useSelector(serversListSelector);
  const dataLoading = useSelector(dataLoadingSelector);
  const error = useSelector(errorSelector);
  const [sortBy, setSortBy] = useState<Fields>();
  const [sortedList, setSortedList] =
    useState<ServersListAPIResponse>(serverListData);
  const handleSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== sortBy) {
      setSortBy(event.target.value as Fields);
    }
  };

  const sortListByField = (field: Fields) => {
    const newList = sortedList.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }

      return 0;
    });

    setSortedList([...newList]);
  };

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  useEffect(() => {
    if (sortBy) {
      sortListByField(sortBy);
    }
  }, [sortBy]);

  useEffect(() => {
    if (!dataLoading) {
      setSortedList([...serverListData]);
    }
  }, [serverListData, dataLoading]);

  useEffect(() => {
    dispatch(requestServersList());
  }, []);

  if (error.hasError) {
    return (
      <div>
        {error.errorMessage ? error.errorMessage : 'Something went wrong'}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.topPart}>
        <div className={styles.logout}>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <AppTitle title="Welcome to Servers List" e2eId={e2e.AppTitle} />
        <select onChange={handleSorting} className={styles.sortBy}>
          <option disabled selected>
            Sort by
          </option>
          <option value="name">Name</option>
          <option value="distance">Distance</option>
        </select>
      </div>
      {dataLoading ? (
        <div className={styles.loading}>
          <Loading />
        </div>
      ) : (
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Distance</td>
            </tr>
          </thead>
          <tbody>
            {sortedList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
