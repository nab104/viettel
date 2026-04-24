"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading, error, clearError } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      router.replace("/");
    } catch {
      /* context */
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Đăng ký</h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Đã có tài khoản?{" "}
        <Link href="/login" className="text-viettel font-medium">
          Đăng nhập
        </Link>
      </p>
      {error && <ErrorAlert message={error} onClose={clearError} />}
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Họ tên
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-900"
            required
            autoComplete="name"
          />
        </div>
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
            Mật khẩu (tối thiểu 6 ký tự)
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-900"
            required
            minLength={6}
            autoComplete="new-password"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <span className="inline-flex items-center justify-center gap-2">
              <Spinner className="h-4 w-4 border-white border-t-transparent" />
              Đang tạo tài khoản
            </span>
          ) : (
            "Đăng ký"
          )}
        </Button>
      </form>
    </div>
  );
}
