import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

const AuthLayout = () => {
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();

  // if (user) {
  //   navigate('/auth', { replace: true });
  // }

  return (
    <div>
      <h2>Auth</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
