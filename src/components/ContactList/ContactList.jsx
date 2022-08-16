import PropTypes from 'prop-types';
import { List, ListItem } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem';

const ContactList = ({ filter }) => {
  if (filter) {
    return (
      <List>
        {filter
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

ContactList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;
