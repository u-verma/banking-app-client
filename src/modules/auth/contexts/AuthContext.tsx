import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { RegisteredUserResponse } from '../../register/model/UserModel';

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: RegisteredUserResponse | null;
  login: (userData: RegisteredUserResponse) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<RegisteredUserResponse | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
      }
    }
  }, []);

  const login = (userData: RegisteredUserResponse) => {
    setCurrentUser(userData);
    localStorage.setItem('currentUser', userData.id.toString());
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    window.location.href = '/'; // Redirect to root URL
  };

  const isAuthenticated = !!currentUser;

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
