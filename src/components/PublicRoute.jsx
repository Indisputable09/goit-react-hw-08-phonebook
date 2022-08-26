import { Navigate } from 'react-router-dom';

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
