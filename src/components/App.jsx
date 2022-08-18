// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// COMPONENTS
import { GlobalStyle } from 'components/GlobalStyle';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import ContactsSection from 'components/Section';
import { /*CenteredLoader */ Section } from './App.styled';
import { filterChange, getFilterValue } from 'redux/filterSlice';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsSlice';
// import Loader from './Loader';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import { ContacsContext } from 'hooks/ContactsContext';
// import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Error from 'pages/Error';
import { lazy, useEffect } from 'react';
import { authOperations } from 'redux/auth';

const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState(filterValueReducer);
  const [addContact, { data, isLoading: isPosting }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
  // const contacts = [];

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const name = e.target.name.value;
      const number = e.target.number.value;
      const contactsNames = contacts.find(contact => contact.name === name);
      const contactsNumbers = contacts.find(
        contact => contact.phone === number
      );
      // const contact = { id: nanoid(), name, number };
      const contact = { name, number };

      if (contactsNames) {
        Swal.fire({
          title: 'Error!',
          text: `Sorry, ${name} is already in your contacts`,
          icon: 'error',
          confirmButtonText: 'Got it',
        });
        return;
      }
      if (contactsNumbers) {
        Swal.fire({
          title: 'Error!',
          text: `Sorry, ${number} is already in your contacts`,
          icon: 'error',
          confirmButtonText: 'Got it',
        });
        return;
      }
      await addContact(contact);
      console.log('~ data', data);
      toast.success('Contact added successfully!');
      e.target.reset();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Try again.');
    }
  };

  const handleChangeFilter = e => {
    const inputValue = e.target.value;
    dispatch(filterChange(inputValue));
    // setFilter(inputValue);
  };

  const createFilter = () => {
    const normalizedFilterValue = filter.toLocaleLowerCase();
    if (contacts) {
      const filteredContacts = contacts.filter(
        contact =>
          contact.name.toLocaleLowerCase().includes(normalizedFilterValue) ||
          contact.phone.toString().includes(normalizedFilterValue)
      );
      return filteredContacts;
    }
  };

  const filteredContacts = createFilter();

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
      <ContacsContext.Provider
        value={{
          onSubmit: handleSubmit,
          isPosting,
          handleChangeFilter,
          filter,
          filteredContacts,
        }}
      >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </ContacsContext.Provider>
    </Section>
  );
  // : (
  //   <CenteredLoader>
  //     <Loader size={50} />
  //   </CenteredLoader>
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
