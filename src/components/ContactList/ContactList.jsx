// import PropTypes from 'prop-types';
import { List, ListItem } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem';
import { useContacts } from 'hooks/ContactsContext';
// import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
// import { useSelector } from 'react-redux';
// import { getFilterValue } from 'redux/filterSlice';

const ContactList = () => {
  // const { data: contacts } = useGetContactsQuery();
  // const filter = useSelector(getFilterValue);
  const { filteredContacts } = useContacts();

  // const createFilter = () => {
  //   const normalizedFilterValue = filter.toLocaleLowerCase();
  //   if (contacts) {
  //     const filteredContacts = contacts.filter(
  //       contact =>
  //         contact.name.toLocaleLowerCase().includes(normalizedFilterValue) ||
  //         contact.phone.toString().includes(normalizedFilterValue)
  //     );
  //     return filteredContacts;
  //   }
  // };

  // const filteredContacts = createFilter();
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

// ContactList.propTypes = {
//   filter: PropTypes.arrayOf(PropTypes.object),
// };

export default ContactList;
