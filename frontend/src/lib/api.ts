import axios, { type AxiosError } from "axios";
import { getToken } from "./auth";
import type { ApiProduct, ApiUser, ApiCart, ApiOrder } from "./types";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:5000/api";

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err: AxiosError<{ message?: string }>) => {
    const msg =
      (err.response?.data as { message?: string })?.message ||
      err.message ||
      "Request failed";
    return Promise.reject(new Error(msg));
  }
);

// --- public ---
export async function getProducts() {
  const { data } = await api.get<{ success: boolean; data: { products: ApiProduct[] } }>(
    "/products"
  );
  return data.data.products;
}

export async function getProductById(id: string) {
  const { data } = await api.get<{ success: boolean; data: { product: ApiProduct } }>(
    `/products/${id}`
  );
  return data.data.product;
}

// --- auth ---
export async function register(body: { name: string; email: string; password: string }) {
  const { data } = await api.post<{
    success: boolean;
    data: { user: ApiUser; token: string };
  }>("/auth/register", body);
  return data.data;
}

export async function login(body: { email: string; password: string }) {
  const { data } = await api.post<{
    success: boolean;
    data: { user: ApiUser; token: string };
  }>("/auth/login", body);
  return data.data;
}

export async function getProfile() {
  const { data } = await api.get<{ success: boolean; data: { user: ApiUser } }>(
    "/user/profile"
  );
  return data.data.user;
}

// --- cart (requires auth) ---
export async function getCart() {
  const { data } = await api.get<{ success: boolean; data: { cart: ApiCart } }>("/cart");
  return data.data.cart;
}

export async function addToCart(productId: string, quantity: number) {
  const { data } = await api.post<{ success: boolean; data: { cart: ApiCart } }>(
    "/cart/items",
    { productId, quantity }
  );
  return data.data.cart;
}

export async function updateCartItem(productId: string, quantity: number) {
  const { data } = await api.patch<{ success: boolean; data: { cart: ApiCart } }>(
    `/cart/items/${productId}`,
    { quantity }
  );
  return data.data.cart;
}

export async function removeCartItem(productId: string) {
  const { data } = await api.delete<{ success: boolean; data: { cart: ApiCart } }>(
    `/cart/items/${productId}`
  );
  return data.data.cart;
}

// --- order ---
export async function createOrder() {
  const { data } = await api.post<{ success: boolean; data: { order: ApiOrder } }>(
    "/orders",
    {}
  );
  return data.data.order;
}

export async function getMyOrders() {
  const { data } = await api.get<{ success: boolean; data: { orders: ApiOrder[] } }>(
    "/orders"
  );
  return data.data.orders;
}

export { api };
