import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation, Link } from './SharedLayout.styled';
import { Box } from 'components/Box';
import Loader from 'components/Loader';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import AuthNav from 'components/AuthNav';

const SharedLayout = ({ user }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        px="4"
        bg="white"
        boxShadow="main"
        as="header"
      >
        <Navigation>
          <Link to="/" state={{ from: location }}>
            Home
          </Link>
          <Link to="contacts" state={{ from: location }}>
            My Contacts
          </Link>
          {user ? (
            <button
              type="button"
              onClick={() => dispatch(authOperations.logOut())}
            >
              Log out
            </button>
          ) : (
            <AuthNav />
          )}
        </Navigation>
      </Box>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
