import React from 'react';
import { Outlet } from 'react-router';
import { AuthProvider } from '../contexts/authContext';

const BaseLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default BaseLayout;
