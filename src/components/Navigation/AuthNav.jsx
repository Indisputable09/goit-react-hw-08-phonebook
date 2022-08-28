import { Link } from '../SharedLayout/SharedLayout.styled';

const AuthNav = () => {
  return (
    <>
      <Link to="register">Register</Link>
      <Link to="login">Login</Link>
    </>
  );
};

export default AuthNav;
