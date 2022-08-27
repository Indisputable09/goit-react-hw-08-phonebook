import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from './SharedLayout/SharedLayout.styled';
import PhonebookIcon from './Icons/PhonebookIcon/PhonebookIcons';

const MainNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <PhonebookIcon user={isLoggedIn} />
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="contacts">My Contacts</Link>}
    </>
  );
};

export default MainNav;

// color={isLoggedIn ? 'white' : 'black'}
