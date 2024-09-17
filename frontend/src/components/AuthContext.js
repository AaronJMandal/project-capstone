import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);

  // const [isLoading, setIsLoading] = useState("false");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setUserToken(token);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("access_token", token);
    setUserToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUserToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
