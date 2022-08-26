import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigation } from './SharedLayout.styled';
import { Box } from 'components/Box';
import Loader from 'components/Loader';
import { authOperations } from 'redux/auth';
import AuthNav from 'components/AuthNav';
import MainNav from 'components/MainNav';

const SharedLayout = ({ user }) => {
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
          <MainNav />
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
