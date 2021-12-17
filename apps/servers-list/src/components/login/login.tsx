import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, setUserLoading } from '../../store/actions';
import e2e from '../../../../../libs/e2e';
import { errorSelector, userLoadingSelector } from '../../store/selectors';
import { Input } from '../input';
import styles from './login.module.scss';
import { AppTitle } from '../app-title';

export const Login = () => {
  const dispatch = useDispatch();
  const userLoading = useSelector(userLoadingSelector);
  const error = useSelector(errorSelector);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(setUserLoading(true));
    dispatch(loginRequest(username, password));
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div className={styles.mainContainer}>
        <AppTitle title="Welcome to Servers List" e2eId={e2e.AppTitle} />
        <div className={styles.loginContainer}>
          <h2 data-e2e={e2e.LoginTitle}>
            Please login to view the servers list
          </h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Username"
              type="text"
              placeholder="Type your username here"
              onChange={handleUsernameChange}
              required
              e2eId={e2e.LoginUserInput}
              value={username}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••••"
              onChange={handlePasswordChange}
              required
              e2eId={e2e.LoginPasswordInput}
              value={password}
            />
            <div className={styles.buttonWrapper}>
              <button
                type="submit"
                disabled={userLoading}
                data-e2e={e2e.LoginSubmitButton}
              >
                {userLoading ? 'Logging in' : 'Login'}
              </button>
            </div>
            {error.hasError && (
              <div
                data-e2e={e2e.LoginErrorMessage}
                className={styles.errorMessage}
              >
                {error.errorMessage
                  ? error.errorMessage
                  : 'Something went wrong'}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
