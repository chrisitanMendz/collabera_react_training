import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import Header from '../components/Header';
import { ProductProvider } from '../context/productContext';

function MainLayout() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <ProductProvider>
      <Header />
      <Outlet />
    </ProductProvider>
  );
}

export default MainLayout;
