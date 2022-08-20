// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// COMPONENTS
import { GlobalStyle } from 'components/GlobalStyle';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import ContactsSection from 'components/Section';
import { /*CenteredLoader */ Section } from './App.styled';
// import Loader from './Loader';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
// import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Error from 'pages/Error';
import { lazy, useEffect } from 'react';
import { authOperations } from 'redux/auth';

const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
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
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
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
