import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../login';
import { ServersList } from '../../components/servers-list';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccessSelector } from '../../store/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { recoverToken } from '../../store/actions';

export type AppProps = {
  isAuthenticated?: boolean;
};

export const App: React.FC<AppProps> = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isAuthenticated = useSelector(loginSuccessSelector);
  const serversList = isAuthenticated ? (
    <ServersList />
  ) : (
    <Navigate to="/login" />
  );

  useEffect(() => {
    dispatch(recoverToken());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/servers-list');
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={serversList} />
      <Route path="login" element={<Login />} />
      <Route path="servers-list" element={serversList} />
      <Route path="*" element={serversList} />
    </Routes>
  );
};
