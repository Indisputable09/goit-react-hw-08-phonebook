// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { GlobalStyle } from 'components/GlobalStyle';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ContactsSection from 'components/Section';
import { CenteredLoader, Section, Title } from './App.styled';
import { filterChange, getFilterValue } from 'redux/filterSlice';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import Loader from './Loader';

export const App = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState(filterValueReducer);
  const [addContact, { isLoading: isPosting }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const name = e.target.name.value;
      const phone = e.target.number.value;
      const contactsNames = contacts.find(contact => contact.name === name);
      const contactsNumbers = contacts.find(contact => contact.phone === phone);
      const contact = { id: nanoid(), name, phone };

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
          text: `Sorry, ${phone} is already in your contacts`,
          icon: 'error',
          confirmButtonText: 'Got it',
        });
        return;
      }
      await addContact(contact);
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

  return contacts ? (
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
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={handleSubmit} isPosting={isPosting} />
      </div>
      <ContactsSection title="Contacts">
        <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
        <ContactList filter={filteredContacts} />
      </ContactsSection>
    </Section>
  ) : (
    <CenteredLoader>
      <Loader size={50} />
    </CenteredLoader>
  );
};
