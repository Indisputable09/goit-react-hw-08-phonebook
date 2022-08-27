import { Suspense } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { AuthNavBlock, MainNavBlock, Navigation } from './SharedLayout.styled';
import { Box } from 'components/Box';
import Loader from 'components/Loader';
import { authOperations } from 'redux/auth';
import AuthNav from 'components/AuthNav';
import MainNav from 'components/MainNav';
import { CenteredLoader } from 'components/App.styled';

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
            <Button
              type="button"
              onClick={() => dispatch(authOperations.logOut())}
            >
              Log out
            </Button>
          ) : (
            <AuthNavBlock>
              <AuthNav />
            </AuthNavBlock>
          )}
        </Navigation>
      </Box>
      <main>
        <Suspense
          fallback={
            <CenteredLoader>
              <Loader size={50} />
            </CenteredLoader>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
