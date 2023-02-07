import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

const AuthLayout = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    console.log('asdasd');
    <Navigate to="/dashboard" replace />;
  }

  return (
    <div>
      <h2>Auth</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
