import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, redirectTo = '/', user }) {
  if (!user) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}
