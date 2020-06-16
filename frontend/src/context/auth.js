import React, { createContext, useState, useEffect  } from 'react';

import * as Auth from '../services/auth'; 
import api from '../services/api';

const AuthContext  = createContext({
  signed: false,
});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState();

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    const storagedUser = localStorage.getItem('@RAuth:user');
    const storagedToken = localStorage.getItem('@RAuth:token');
    
    api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
  };

  async function signIn(email, passoword) {
    try {
      const response = await Auth.signIn(email, passoword);
      
      if (response === 404) {
        setError('Email inválido')
      }
      if (response === 400) {
        setError('Senha inválida');
      }
      
      setTimeout(() => setError(null), 3000);
      setUser(response?.data?.user);

      api.defaults.headers["Authorization"] = `Bearer ${response?.data?.token}`;
      
      localStorage.setItem('@RAuth:user', JSON.stringify(response?.data?.user ? response?.data?.user : ''));
      localStorage.setItem('@RAuth:token', response?.data?.token ? response?.data?.token : '');
    } catch {}
  }

  async function logout() {
    localStorage.clear();
    setUser(null)
  }

  const values = {
    signed: user ? true : false,
    signIn,
    user,
    error,
    logout,
    setError
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;