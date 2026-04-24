"use client";

import { Suspense, useState, FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";

function LoginForm() {
  const sp = useSearchParams();
  const next = sp.get("next") || "/";
  const router = useRouter();
  const { login, isLoading, error, clearError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.replace(next);
    } catch {
      /* error in context */
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Đăng nhập</h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Chưa có tài khoản?{" "}
        <Link href="/register" className="text-viettel font-medium">
          Đăng ký
        </Link>
      </p>
      {error && <ErrorAlert message={error} onClose={clearError} />}
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-900"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-900"
            required
            minLength={6}
            autoComplete="current-password"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <span className="inline-flex items-center justify-center gap-2">
              <Spinner className="h-4 w-4 border-white border-t-transparent" />
              Đang xử lý
            </span>
          ) : (
            "Đăng nhập"
          )}
        </Button>
      </form>
    </>
  );
}

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <Suspense
        fallback={
          <div className="flex justify-center py-12">
            <Spinner className="h-8 w-8" />
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
