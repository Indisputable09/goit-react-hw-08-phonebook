import { CenteredLoader, Title } from 'components/App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import ContactsSection from 'components/Section/Section';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const Contacts = () => {
  const { data: contacts } = useGetContactsQuery();
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
