import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { authOperations, authSelectors } from 'redux/auth';
// COMPONENTS
import { GlobalStyle } from 'components/GlobalStyle';
import { CenteredLoader, Section } from './App.styled';
import SharedLayout from './SharedLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Toast from './Toast';
import Loader from './Loader';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Error = lazy(() => import('pages/Error'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      <GlobalStyle />
      <Toast />
      {isFetchingCurrentUser ? (
        <CenteredLoader>
          <Loader size={50} />
        </CenteredLoader>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout user={isLoggedIn} />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute user={isLoggedIn}>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  user={isLoggedIn}
                >
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  user={isLoggedIn}
                >
                  <Register />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      )}
    </Section>
  );
};
