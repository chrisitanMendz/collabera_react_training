import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './layouts/authLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  // {
  //   path: 'main',
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       index: true,
  //       children: <Home />,
  //     },
  //   ],
  // },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        // path: 'login',
        element: <Login />,
      },
      {
        path: 'Register',
        element: <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
