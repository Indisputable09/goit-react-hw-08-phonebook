import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from './SharedLayout/SharedLayout.styled';

const MainNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="contacts">My Contacts</Link>}
    </>
  );
};

export default MainNav;
