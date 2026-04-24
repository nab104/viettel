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
import type { ApiCart } from "@/lib/types";
import { useAuth } from "./AuthContext";

type CartValue = {
  cart: ApiCart | null;
  isLoading: boolean;
  error: string | null;
  itemCount: number;
  refresh: () => Promise<void>;
  add: (productId: string, quantity: number) => Promise<void>;
  updateQty: (productId: string, quantity: number) => Promise<void>;
  remove: (productId: string) => Promise<void>;
  clearError: () => void;
};

const CartCtx = createContext<CartValue | null>(null);

function sumQty(c: ApiCart | null) {
  if (!c?.items?.length) return 0;
  return c.items.reduce((a, l) => a + l.quantity, 0);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { user, isReady } = useAuth();
  const [cart, setCart] = useState<ApiCart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!user) {
      setCart(null);
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      const c = await api.getCart();
      setCart(c);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Không tải được giỏ hàng");
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!isReady) return;
    if (!user) {
      setCart(null);
      return;
    }
    void refresh();
  }, [isReady, user, refresh]);

  const add = useCallback(
    async (productId: string, quantity: number) => {
      if (!user) {
        const err = new Error("Vui lòng đăng nhập để thêm vào giỏ hàng");
        setError(err.message);
        throw err;
      }
      setError(null);
      setIsLoading(true);
      try {
        const c = await api.addToCart(productId, quantity);
        setCart(c);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Lỗi thêm giỏ hàng";
        setError(msg);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [user]
  );

  const updateQty = useCallback(async (productId: string, quantity: number) => {
    if (!user) return;
    setError(null);
    setIsLoading(true);
    try {
      const c = await api.updateCartItem(productId, quantity);
      setCart(c);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Lỗi cập nhật");
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const remove = useCallback(async (productId: string) => {
    if (!user) return;
    setError(null);
    setIsLoading(true);
    try {
      const c = await api.removeCartItem(productId);
      setCart(c);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Lỗi xóa");
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const clearError = useCallback(() => setError(null), []);

  const itemCount = useMemo(() => sumQty(cart), [cart]);

  const value = useMemo<CartValue>(
    () => ({
      cart,
      isLoading,
      error,
      itemCount,
      refresh,
      add,
      updateQty,
      remove,
      clearError,
    }),
    [cart, isLoading, error, itemCount, refresh, add, updateQty, remove, clearError]
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart cần CartProvider");
  return ctx;
}
