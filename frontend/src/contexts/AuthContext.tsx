"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import * as api from "@/lib/api";
import { getToken, setToken, clearToken } from "@/lib/auth";
import type { ApiUser } from "@/lib/types";

type AuthValue = {
  user: ApiUser | null;
  isReady: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  clearError: () => void;
};

const AuthCtx = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<ApiUser | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshUser = useCallback(async () => {
    if (!getToken()) {
      setUser(null);
      return;
    }
    const u = await api.getProfile();
    setUser(u);
  }, []);

  useEffect(() => {
    let off = false;
    (async () => {
      if (!getToken()) {
        if (!off) setIsReady(true);
        return;
      }
      try {
        const u = await api.getProfile();
        if (!off) setUser(u);
      } catch {
        if (!off) {
          clearToken();
          setUser(null);
        }
      } finally {
        if (!off) setIsReady(true);
      }
    })();
    return () => {
      off = true;
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { user: u, token } = await api.login({ email, password });
      setToken(token);
      setUser(u);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Đăng nhập thất bại";
      setError(msg);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const { user: u, token } = await api.register({ name, email, password });
        setToken(token);
        setUser(u);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Đăng ký thất bại";
        setError(msg);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    clearToken();
    setUser(null);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  const value = useMemo<AuthValue>(
    () => ({
      user,
      isReady,
      isLoading,
      error,
      login,
      register,
      logout,
      refreshUser,
      clearError,
    }),
    [user, isReady, isLoading, error, login, register, logout, refreshUser, clearError]
  );

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth cần AuthProvider");
  return ctx;
}
