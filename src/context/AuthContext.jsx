import { createContext, useContext, useState } from 'react';
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const login = (t) => {
    localStorage.setItem('token', t);
    setToken(t);
  };
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };
  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
};