import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

const Home = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Main</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
