import React, { createContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await SecureStore.getItemAsync('data');
      const parsedUser = JSON.parse(user);
      setUser({ data: parsedUser });
    })();
  }, []);

  useEffect(() => {
    user &&
      (async () => {
        const [key] = Object.keys(user);
        const value = user[key];
        await SecureStore.setItemAsync(key, JSON.stringify(value));
      })();
  }, [user]);

  return (
    <AuthContext.Provider value={[(user && user.data) || null, setUser]}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
