import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const ContactsSection = ({ title, children }) => {
  return (
    <>
      <div>
        <Title>{title}</Title>
        {children}
      </div>
    </>
  );
};

ContactsSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactsSection;
