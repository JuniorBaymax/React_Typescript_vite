import { ReactElement, ReactNode } from 'react';
import { Route, Navigate, RouteProps, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  // userType is a string representing the user's userType
  userType: string;
  // component is the component to render if the user has the correct userType
  component: any;
}

const PrivateRoute = ({ component: Component, userType, ...rest }: PrivateRouteProps) => {
  // TODO: Replace with actual implementation of checking the user's userType
  const userHasRole = true;
  const location = useLocation();

  return (
    <Route
      {...rest}
      element={
        userHasRole ? (
          <Component />
        ) : (
          <Navigate to='/unauthorized' replace state={{ from: location }} />
        )
      }
    />
  );
};

export default PrivateRoute;
