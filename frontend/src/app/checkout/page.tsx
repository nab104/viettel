"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createOrder } from "@/lib/api";
import { formatPrice } from "@/lib/format";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { Spinner } from "@/components/ui/Spinner";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  const router = useRouter();
  const { user, isReady } = useAuth();
  const { cart, refresh, itemCount } = useCart();
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isReady && !user) router.push("/login?next=/checkout");
  }, [isReady, user, router]);

  const items = cart?.items || [];
  const subtotal = items.reduce((s, l) => s + l.product.price * l.quantity, 0);

  const onOrder = async () => {
    if (itemCount < 1) {
      setErr("Giỏ hàng trống");
      return;
    }
    setErr("");
    setSubmitting(true);
    try {
      const order = await createOrder();
      await refresh();
      router.push(`/?order=${order._id}`);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Đặt hàng thất bại");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isReady) {
    return (
      <div className="flex justify-center py-20">
        <Spinner className="h-10 w-10" />
      </div>
    );
  }
  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Thanh toán</h1>
      {err && <ErrorAlert message={err} onClose={() => setErr("")} />}
      <p className="text-gray-600 text-sm mb-2">
        Bạn sắp đặt hàng {itemCount} sản phẩm, tổng <strong className="text-viettel">{formatPrice(subtotal)}</strong>
        .
      </p>
      <p className="text-gray-500 text-xs mb-6">Đơn hàng được tạo từ giỏ hàng hiện tại (API demo).</p>
      <div className="flex gap-3">
        <Button type="button" onClick={onOrder} disabled={submitting || itemCount < 1}>
          {submitting ? "Đang xử lý…" : "Xác nhận đặt hàng"}
        </Button>
        <Button type="button" variant="secondary" onClick={() => router.push("/cart")}>
          Về giỏ hàng
        </Button>
      </div>
    </div>
  );
}
