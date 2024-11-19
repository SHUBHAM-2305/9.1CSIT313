// src/pages/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../utils/firebase'; // Import Firebase auth
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();//it holds and share the user authentication state i.e logged in or out

export const useAuth = () => {//this is a custom hook that provide an easy access to the user authentication information, user, logout function
  return useContext(AuthContext);
};

//This is a React component that wraps other components and provides them with the authentication context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
