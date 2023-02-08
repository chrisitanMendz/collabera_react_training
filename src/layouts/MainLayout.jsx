import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import Header from '../components/Header';
import { ProductProvider } from '../context/productContext';
import { CartProvider } from '../context/cartContext';

function MainLayout() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <ProductProvider>
      <CartProvider>
        <>
          <Header />
          <Outlet />
        </>
      </CartProvider>
    </ProductProvider>
  );
}

export default MainLayout;
