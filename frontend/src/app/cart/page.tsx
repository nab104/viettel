"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/format";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { Spinner } from "@/components/ui/Spinner";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { Button } from "@/components/ui/Button";
import type { ApiProduct } from "@/lib/types";

function lineImage(p: ApiProduct) {
  return p.images?.[0] || "https://placehold.co/100?text=No+image";
}

export default function CartPage() {
  const router = useRouter();
  const { user, isReady } = useAuth();
  const { cart, isLoading, error, updateQty, remove, clearError, refresh } = useCart();

  useEffect(() => {
    if (isReady && !user) router.push("/login?next=/cart");
  }, [isReady, user, router]);

  if (!isReady) {
    return (
      <div className="flex justify-center py-20">
        <Spinner className="h-10 w-10" />
      </div>
    );
  }
  if (!user) {
    return null;
  }

  const items = cart?.items || [];
  const subtotal = items.reduce((s, l) => s + l.product.price * l.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Giỏ hàng</h1>
      {error && <ErrorAlert message={error} onClose={clearError} />}

      {isLoading && !items.length ? (
        <div className="flex justify-center py-12">
          <Spinner className="h-10 w-10" />
        </div>
      ) : items.length === 0 ? (
        <p className="text-gray-600 py-8">
          Giỏ hàng trống.{" "}
          <Link href="/products" className="text-viettel font-medium">
            Mua sắm
          </Link>
        </p>
      ) : (
        <>
          <ul className="space-y-4 mb-8">
            {items.map((line) => {
              const pr = line.product;
              if (!pr) return null;
              const id = String(pr._id);
              return (
                <li
                  key={id}
                  className="flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <Link href={`/products/${id}`} className="relative w-24 h-24 shrink-0 bg-gray-50 rounded-lg">
                    <Image
                      src={lineImage(pr)}
                      alt={pr.name}
                      fill
                      className="object-contain p-1"
                      unoptimized
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${id}`} className="font-medium text-gray-900 line-clamp-2 hover:text-viettel">
                      {pr.name}
                    </Link>
                    <p className="text-viettel font-bold mt-1">{formatPrice(pr.price)}</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <div className="flex items-center border rounded-lg">
                        <button
                          type="button"
                          className="px-2 py-1 text-lg disabled:opacity-40"
                          disabled={line.quantity <= 1}
                          onClick={() => void updateQty(id, line.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{line.quantity}</span>
                        <button
                          type="button"
                          className="px-2 py-1 text-lg"
                          onClick={() => void updateQty(id, line.quantity + 1)}
                          disabled={line.quantity >= pr.stock}
                        >
                          +
                        </button>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="text-red-600"
                        onClick={() => void remove(id)}
                      >
                        Xóa
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="bg-white p-4 rounded-xl border border-gray-100">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Tạm tính</span>
              <span className="text-viettel">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button type="button" onClick={() => router.push("/checkout")} disabled={!items.length}>
                Thanh toán
              </Button>
              <Button type="button" variant="secondary" onClick={() => void refresh()}>
                Làm mới
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
