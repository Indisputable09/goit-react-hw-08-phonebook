// import PropTypes from 'prop-types';
import { List, ListItem } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem';
import { useContacts } from 'hooks/ContactsContext';

const ContactList = () => {
  const { filteredContacts } = useContacts();
  if (filteredContacts) {
    return (
      <List>
        {filteredContacts
          .sort((firstName, secondName) =>
            firstName.name.localeCompare(secondName.name)
          )
          .map(({ id, name, phone }) => (
            <ListItem key={id} name={name}>
              <ContactListItem name={name} phone={phone} id={id} />
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
