import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { HomeLink, HomeTitle } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <HomeTitle>
          Thank you for being with us. Now you can add your contacts and be sure
          they are kept in a safe place!
        </HomeTitle>
      ) : (
        <HomeTitle>
          Welcome, dear Guest! This website is made to help you create your own
          phonebook where you can keep all your contacts. If you want to
          proceed, please, <HomeLink to="register">Sign up</HomeLink> or{' '}
          <HomeLink to="login">Log in</HomeLink>.
        </HomeTitle>
      )}
    </>
  );
};

export default Home;
