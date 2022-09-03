import { Title } from 'App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactsSection from 'components/Section/Section';
import { Container } from 'pages/Home/Home.styled';

const PhonebookContent = () => {
  return (
    <section>
      <Container>
        <div>
          <Title>Phonebook</Title>
          <ContactForm />
        </div>
      </Container>
      <ContactsSection title="Contacts">
        <Filter />
        <ContactList />
      </ContactsSection>
    </section>
  );
};

export default PhonebookContent;
