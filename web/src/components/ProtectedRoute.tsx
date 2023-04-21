import { ComponentType } from 'react';
import { Route, Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: ComponentType<any>;
  isAuthenticated: boolean;
}

export default function ProtectedRoute({
  component: Component,
  isAuthenticated,
  ...rest
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/" />;
  }
}
