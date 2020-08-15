import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isSignedIn, getUsername } from '../service/authService';

export const PublicRoute = ({
  component: Component,
  restricted,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isSignedIn() && restricted ? (
          <Redirect to={`/`} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isSignedIn() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
