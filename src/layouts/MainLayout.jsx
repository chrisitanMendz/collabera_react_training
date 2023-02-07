import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/authContext';

const MainLayout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/auth', { replace: true });
  }

  return (
    <>
      <div>MainLayout</div>
      <Outlet />
    </>
  );
};

export default MainLayout;
