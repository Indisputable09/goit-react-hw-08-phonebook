import { Suspense } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
  AuthNavBlock,
  MainNavBlock,
  Navigation,
  UserMenuBlock,
} from './SharedLayout.styled';
import Loader from 'components/Loader';
import { authOperations, authSelectors } from 'redux/auth';
import AuthNav from 'components/Navigation/AuthNav';
import MainNav from 'components/Navigation/MainNav';
import { CenteredLoader } from 'App.styled';
import { Box } from 'components/Box';
import { LogOutButton } from 'components/Button/Button.styled';

const SharedLayout = ({ user }) => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

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
        zIndex="1000"
      >
        <Navigation>
          <MainNavBlock>
            <MainNav user={user} />
          </MainNavBlock>
          {user ? (
            <UserMenuBlock>
              <p>{name}</p>
              <AccountCircle />
              <LogOutButton
                type="button"
                onClick={() => dispatch(authOperations.logOut())}
              >
                Log out
              </LogOutButton>
            </UserMenuBlock>
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
