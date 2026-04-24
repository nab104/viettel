"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Spinner } from "@/components/ui/Spinner";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isReady, logout } = useAuth();

  useEffect(() => {
    if (isReady && !user) router.push("/login?next=/profile");
  }, [isReady, user, router]);

  if (!isReady) {
    return (
      <div className="flex justify-center py-20">
        <Spinner className="h-10 w-10" />
      </div>
    );
  }
  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Tài khoản</h1>
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3 text-sm">
        <p>
          <span className="text-gray-500">Họ tên: </span>
          <span className="font-medium text-gray-900">{user.name}</span>
        </p>
        <p>
          <span className="text-gray-500">Email: </span>
          <span className="font-medium text-gray-900">{user.email}</span>
        </p>
        <p>
          <span className="text-gray-500">Vai trò: </span>
          <span className="font-medium text-gray-900">{user.role}</span>
        </p>
      </div>
      <Button
        type="button"
        variant="outline"
        className="mt-6 w-full"
        onClick={() => {
          logout();
          router.push("/");
        }}
      >
        Đăng xuất
      </Button>
    </div>
  );
}
