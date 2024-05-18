import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginState = localStorage.getItem("login_state");
    setIsLoggedIn(loginState === "true");
  }, []);

  const login = () => {
    localStorage.setItem("login_state", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem("login_state", "false");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
