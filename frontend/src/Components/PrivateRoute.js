import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.postReducer.login);

  if (isAuthenticated) {
    return element
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;