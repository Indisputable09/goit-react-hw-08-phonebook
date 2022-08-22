// import { useSelector } from 'react-redux';
import {
  // Route, Redirect,
  Navigate,
} from 'react-router-dom';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  user,
}) {
  const shouldRedirect = user && restricted;
  if (shouldRedirect) {
    return <Navigate to={redirectTo} />;
  }
  return children;
}

// import { Navigate } from 'react-router-dom';

// export default function PrivateRoute({ children, redirectTo = '/', user }) {
//   if (!user) {
//     return <Navigate to={redirectTo} />;
//   }

//   return children;
// }
