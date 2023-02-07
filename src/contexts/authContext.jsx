import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import Fetch from '../global/TryCatchFetch';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const login = useCallback(async (value, actions) => {
    const URL = 'http://localhost:3000/signin';
    const [res, error] = await Fetch(URL, {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (error) {
      actions.setErrors({ serverError: error });
      return;
    }
    actions.resetForm();
    setUser(res);
    localStorage.setItem('token', JSON.stringify(res));
    // navigate('/dashboard', { replace: true });
  }, []);

  const register = useCallback(async (value, actions) => {
    const { confirmPassword, ...rest } = value;
    const URL = 'http://localhost:3000/register';
    const [, error] = await Fetch(URL, {
      method: 'POST',
      body: JSON.stringify(rest),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (error) {
      actions.setErrors({ serverError: error });
      return;
    }
    actions.resetForm();
    setUser(res);
    localStorage.setItem('token', JSON.stringify(res));
    // navigate('dashboard', { replace: true });
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    setUser(null);
  }, []);

  const value = useMemo(() => ({ login, register, logout, user }), [login, register, logout, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
