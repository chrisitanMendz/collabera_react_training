import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

const Home = () => {
  const { logout, user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <h1>Main</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
