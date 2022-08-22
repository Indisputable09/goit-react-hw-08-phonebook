import { CenteredLoader, Title } from 'components/App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import ContactsSection from 'components/Section/Section';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
// import { getShowModal } from 'redux/modalSlice';

const Contacts = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { data: contacts, refetch } = useGetContactsQuery();

  useEffect(() => {
    if (isLoggedIn) {
      refetch();
    }
  }, [isLoggedIn, refetch]);

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
