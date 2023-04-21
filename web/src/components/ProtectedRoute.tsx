import { ComponentType, memo } from 'react';
import { Navigate } from 'react-router-dom';
import { LocationDescriptorObject } from 'history';

interface ProtectedRouteProps {
  component: ComponentType<any>;
  isAuthenticated: boolean;
  path: string;
  redirectTo: string;
  location?: LocationDescriptorObject;
}

//added a redirectTo which will be used to redirect the user to the appropriate page if they are not authenticated.
const ProtectedRoute = memo(
  ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...rest
  }: ProtectedRouteProps) => {
    if (isAuthenticated) {
      return <Component {...rest} />;
    } else {
      //add the replace prop to the Navigate component to replace the current history entry instead of adding a new one.
      return (
        <Navigate to={redirectTo} replace state={{ from: rest.location }} />
      );
    }
  }
);

export default ProtectedRoute;
