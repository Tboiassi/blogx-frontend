import { useState, type ReactNode } from "react";
import type { AuthUser } from "../../types/auth";
import { AuthContext } from "./auth-context-def";

export type { AuthContextValue } from "./auth-context-def";

interface AuthProviderProps {
  children: ReactNode;
}

const STORAGE_KEY_USER = "blogx_user";
const STORAGE_KEY_TOKEN = "blogx_token";

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUserState] = useState<AuthUser | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_USER);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const setUser = (newUser: AuthUser | null) => {
    setUserState(newUser);
    if (newUser) {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(newUser));
    } else {
      localStorage.removeItem(STORAGE_KEY_USER);
      localStorage.removeItem(STORAGE_KEY_TOKEN);
    }
  };

  const login = (newUser: AuthUser, token?: string) => {
    setUser(newUser);
    if (token) {
      localStorage.setItem(STORAGE_KEY_TOKEN, token);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
