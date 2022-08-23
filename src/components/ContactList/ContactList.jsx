import { useSelector } from 'react-redux';
import { List, ListItem } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilterValue);

  const createFilter = () => {
    const normalizedFilterValue = filter.toLocaleLowerCase();
    if (contacts) {
      const filteredContacts = contacts.filter(
        contact =>
          contact.name.toLocaleLowerCase().includes(normalizedFilterValue) ||
          contact.number.toString().includes(normalizedFilterValue)
      );
      return filteredContacts;
    }
  };

  const filteredContacts = createFilter();

  if (filteredContacts) {
    return (
      <List>
        {filteredContacts
          .sort((firstName, secondName) =>
            firstName.name.localeCompare(secondName.name)
          )
          .map(({ id, name, number }) => (
            <ListItem key={id} name={name}>
              <ContactListItem name={name} number={number} id={id} />
            </ListItem>
          ))}
      </List>
    );
  }
};

export default ContactList;
