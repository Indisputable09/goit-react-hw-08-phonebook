// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// COMPONENTS
import { GlobalStyle } from 'components/GlobalStyle';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import ContactsSection from 'components/Section';
import { Section } from './App.styled';
// import Loader from './Loader';
import SharedLayout from './SharedLayout';
import { lazy, useEffect } from 'react';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Error = lazy(() => import('pages/Error'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  // return
  // contacts ?
  return (
    <Section>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        theme={'colored'}
        transition={Slide}
        closeOnClick
      />
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
              <PublicRoute restricted redirectTo="/contacts" user={isLoggedIn}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/contacts" user={isLoggedIn}>
                <Register />
              </PublicRoute>
            }
          />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Section>
  );
  // : (
  // <CenteredLoader>
  //   <Loader size={50} />
  // </CenteredLoader>
  // );
};

//  <>
//    <GlobalStyle />
//    <Routes>
//      <Route path="/" element={<SharedLayout />}>
//        <Route index element={<Home />} />
//        <Route path="movies" element={<Movies />} />
//        <Route path="movies/:movieId" element={<MovieDetails />}>
//          <Route path="cast" element={<Cast />} />
//          <Route path="reviews" element={<Reviews />} />
//        </Route>
//        <Route path="*" element={<Error />} />
//      </Route>
//    </Routes>
//  </>;
