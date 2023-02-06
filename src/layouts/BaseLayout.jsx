import React from 'react';
import { Outlet } from 'react-router';

const BaseLayout = () => {
  return (
    <>
      <h2>Base Component</h2>
      <Outlet />
    </>
  );
};

export default BaseLayout;
