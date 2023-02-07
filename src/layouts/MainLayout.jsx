import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { AuthContext } from '../contexts/authContext';

const MainLayout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    console.log(user);
    <Navigate to="/auth" replace />;
  }

  return (
    <>
      <div>MainLayout</div>
      <Outlet />
    </>
  );
};

export default MainLayout;
