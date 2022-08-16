import { Title } from 'components/App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactsSection from 'components/Section/Section';

const Contacts = () => {
  return (
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
  );
};

export default Contacts;
