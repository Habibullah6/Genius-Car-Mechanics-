import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../context/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {users, isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="success" />
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          users.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;