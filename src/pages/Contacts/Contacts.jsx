// import { skipToken } from '@reduxjs/toolkit/query';
import { CenteredLoader, Title } from 'components/App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import ContactsSection from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
// import { getShowModal } from 'redux/modalSlice';

const Contacts = () => {
  // const showModal = useSelector(getShowModal);
  // console.log('~ showModal', showModal);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log('~ isLoggedIn', isLoggedIn);
  const { data: contacts } = useGetContactsQuery({ skip: !isLoggedIn });
  console.log('~ contacts', contacts);
  // useEffect(() => {}, [third]);

  return contacts ? (
    <>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
      </div>
      <ContactsSection title="Contacts">
        <Filter />
        <ContactList />
      </ContactsSection>
    </>
  ) : (
    <CenteredLoader>
      <Loader size={50} />
    </CenteredLoader>
  );
};

export default Contacts;
