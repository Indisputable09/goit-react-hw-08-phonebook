import { Link } from 'react-router-dom';
import { PhoneBookIconStyled } from '../Icons.styled';

const PhonebookIcon = ({ user }) => {
  return (
    <Link to="/">
      <PhoneBookIconStyled size={28} user={`${user}`} />
    </Link>
  );
};

export default PhonebookIcon;
