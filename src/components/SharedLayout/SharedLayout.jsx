import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { AuthNavBlock, MainNavBlock, Navigation } from './SharedLayout.styled';
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
        px="4"
        bg="blue"
        boxShadow="main"
        as="header"
        position="fixed"
        top="0"
        left="0"
        width="100%"
      >
        <Navigation>
          <MainNavBlock>
            <MainNav />
          </MainNavBlock>
          {user ? (
            <button
              type="button"
              onClick={() => dispatch(authOperations.logOut())}
            >
              Log out
            </button>
          ) : (
            <AuthNavBlock>
              <AuthNav />
            </AuthNavBlock>
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
