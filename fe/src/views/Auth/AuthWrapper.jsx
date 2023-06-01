import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

const AuthWrapper = () => {
  const [user, setUser] = useState({ name: '', isAuthenticated: false });
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      if (password === 'password') {
        setUser({ name: email, isAuthenticated: true });
        resolve('success');
      } else {
        reject('incorrect password');
      }
    });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };
  return <AuthContext.Provider value={{ user, login, logout }}></AuthContext.Provider>;
};

export default AuthWrapper;
