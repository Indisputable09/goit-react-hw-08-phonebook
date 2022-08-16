import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation, Link } from './SharedLayout.styled';
import { Box } from 'components/Box';
import Loader from 'components/Loader';

const SharedLayout = () => {
  const location = useLocation();
  // const backToMovieSearch = location.state?.from ?? '/movies';
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
          <Link to="register" state={{ from: location }}>
            Register
          </Link>
          <Link to="login" state={{ from: location }}>
            Login
          </Link>
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
